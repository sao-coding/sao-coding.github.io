if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const s=e=>r(e,d),f={module:{uri:d},exports:o,require:s};a[d]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f4808af81bdbf1ea4b68174cf719faa7"},{url:"announcement/",revision:"2f4aff9d4762ffe2cf2ad2ced45b528a"},{url:"archives/2022/01/",revision:"4960b9b99c4fcd7b9b148a78f15969db"},{url:"archives/2022/02/",revision:"394be55f233b833d6f13f9a5ad922627"},{url:"archives/2022/02/page/2/",revision:"beb3d2338d2c149caeadd0baade2e1e8"},{url:"archives/2022/02/page/3/",revision:"fc1c7857db0652192dd7ed481d59712f"},{url:"archives/2022/03/",revision:"0d32dcfeea6e84cf16ed7c4531fd0a19"},{url:"archives/2022/04/",revision:"39eec5e22ab9bc37de23504bc7f1d70b"},{url:"archives/2022/05/",revision:"727560fd265c5c4e974823026e9e8c86"},{url:"archives/2022/07/",revision:"d6871da5fcea4a68134e3f79bc984af5"},{url:"archives/2022/08/",revision:"db97f07884354020000a056570403ccd"},{url:"archives/2022/",revision:"2488fd23799fe2f9accc7ef17e9ac123"},{url:"archives/2022/page/2/",revision:"909b627ec2d53a0b90c389cf6b565931"},{url:"archives/2022/page/3/",revision:"88a72ad9b356a9bb26a693f817b31aa0"},{url:"archives/2022/page/4/",revision:"eeaa7c58082ce61e22778388c06c2781"},{url:"archives/2022/page/5/",revision:"5585789a623df2c40d64c9cba95e4679"},{url:"archives/",revision:"4efa8ce9d1070b6833df2e384b443f3f"},{url:"archives/page/2/",revision:"4b6ddf040bef6951574f14c073105717"},{url:"archives/page/3/",revision:"4213f6b4fd57db7213c6dfa3158f85ba"},{url:"archives/page/4/",revision:"0be0df31ccf3f00e164ff4c1105501f6"},{url:"archives/page/5/",revision:"2dd0e6b1401d8530211123d2cd4f1a28"},{url:"backstage/",revision:"1018cab21221dcacf5a1653695946c27"},{url:"bangumis/",revision:"603f785cf0e3bf3b765ef8f95e5301be"},{url:"categories/HEXO/",revision:"87e828e7bd3e36f639d1ebcf94c2a47d"},{url:"categories/",revision:"db1e38cfd95aa1eec83f0df80937e186"},{url:"categories/LeetCode/",revision:"2485093d798fb857bcaf29e20930d9b2"},{url:"categories/ZeroJudge/",revision:"7d9b3906e12d49ce767be0be8fa967de"},{url:"categories/ZeroJudge/page/2/",revision:"5c6d23d651e813a10e53bf9183cf1b4c"},{url:"categories/ZeroJudge/page/3/",revision:"670e562d5b5ecddc72ec85aed95da4dd"},{url:"categories/ZeroJudge/page/4/",revision:"15bbc14e3dcd40e8567abf9f243c06c3"},{url:"categories/宿舍活動/",revision:"2031e08df162a9f4da65ef786ff67021"},{url:"categories/工具/",revision:"615a2f19c47a4e9cdd2d6f4d8214a25c"},{url:"categories/練習題/",revision:"7de81e0ab8a1a68309a259857e964fbf"},{url:"categories/遊戲/",revision:"04f8b35a9d3a84fa294b52ae8a25a118"},{url:"categories/鍵盤/",revision:"2a99d18076fb1ccbf22264961dcdd1e7"},{url:"comments/",revision:"20b82910e2c6cae7884870265b44eead"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"dceedd60a1368ec43c7f564e858bc5e9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"3fa038f5c6d512c25e3f42e1a0a5429d"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"5ace0849e3bc567621ab7ef9923fe643"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"c7ef76460983739159cfa60cbcf3b3fc"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"2a344ba29d25a0d5d06358a8bea8f94d"},{url:"page/2/",revision:"47fa594dc773e958faa17552a073bc31"},{url:"page/3/",revision:"68d51e125ffc8bf1ef5318a2340ef280"},{url:"page/4/",revision:"7e789205eed2dd79d6a51191c0ac98a3"},{url:"page/5/",revision:"c7042193655d4156c0d24b5bdef61a7c"},{url:"post/cover/",revision:"3dc3bf88eee8bac9483839dfd1202cda"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"ac9691d45df84e4c099013405e661bc2"},{url:"post/minecraft-java/",revision:"b1394261fd4dbb1a503fe7baa49eff69"},{url:"post/oj/leetcode/1. Two Sum/",revision:"026e4b3fac030dc999ec00ef641e6ae1"},{url:"post/oj/zerojudge/a001/",revision:"b58bea71c94ba9b3a7c6c44781c684d3"},{url:"post/oj/zerojudge/a002/",revision:"388cae766e0d9c9e15eda5b69eaf5785"},{url:"post/oj/zerojudge/a003/",revision:"ecca8b9b26af1175223d3ae37a50a9c8"},{url:"post/oj/zerojudge/a004/",revision:"b067bf7e8d9f88110146de07b0e883e5"},{url:"post/oj/zerojudge/a005/",revision:"55878a9258f9c78acb848088410a85db"},{url:"post/oj/zerojudge/a006/",revision:"267be8c8e8c8d867d8bc430cff0e6aba"},{url:"post/oj/zerojudge/a009/",revision:"aeea0e668a78d4c98398218fcb66f3bc"},{url:"post/oj/zerojudge/a010/",revision:"4eab1cc27018b469f7a7243772fe149f"},{url:"post/oj/zerojudge/a015/",revision:"2cbbd2350f5b72f358d301e944f6b57a"},{url:"post/oj/zerojudge/a017/",revision:"2b0c579b468bb5065b3d1986b123b45e"},{url:"post/oj/zerojudge/a020/",revision:"f4493062cfbfb56faaf60e633d30777a"},{url:"post/oj/zerojudge/a021/",revision:"2fabeaa381af47c80b9ff92acaa76596"},{url:"post/oj/zerojudge/a022/",revision:"23f6454569e0fbdb0cad02bfc974faf6"},{url:"post/oj/zerojudge/a024/",revision:"db62f15d65c1c16414bd1bd163fd17c7"},{url:"post/oj/zerojudge/a034/",revision:"02754c38e32d02b465c6740afd709538"},{url:"post/oj/zerojudge/a038/",revision:"f1cce4400f65bc6a581d511f7bd54805"},{url:"post/oj/zerojudge/a053/",revision:"924bf4e895782da051b69bba4ba0590e"},{url:"post/oj/zerojudge/a058/",revision:"3c2aa844ee534ae6eb0b92d3b485a7e8"},{url:"post/oj/zerojudge/a059/",revision:"6948b1727b5405c059aab0a9f6362db9"},{url:"post/oj/zerojudge/a065/",revision:"cadc3aa12493ae28a4fc4646c21ae1f2"},{url:"post/oj/zerojudge/a104/",revision:"bcca2e12e3dee8c061f06005ab2f08bb"},{url:"post/oj/zerojudge/a147/",revision:"70fb8541863140c740df08ef6b734cfd"},{url:"post/oj/zerojudge/a148/",revision:"e4f318ebc9ac20bc4fafb1371ad75a6b"},{url:"post/oj/zerojudge/a149/",revision:"a779d0570226f0c527e52c1d4870c311"},{url:"post/oj/zerojudge/a215/",revision:"7362ae391586a95ba4ed1efce0e5e4bc"},{url:"post/oj/zerojudge/a244/",revision:"24136b45bf89e41aac67bdd637286471"},{url:"post/oj/zerojudge/a263/",revision:"5b83b9d2c10603d7e358fae0bf312074"},{url:"post/oj/zerojudge/a528/",revision:"399f047dfa6ea530afa92ad47acd8864"},{url:"post/oj/zerojudge/a738/",revision:"e8945e7dcd21585f53804b160a1ce992"},{url:"post/oj/zerojudge/a799/",revision:"35328588d2aec7a4384aee590a545621"},{url:"post/oj/zerojudge/a915/",revision:"140b905a5aa579512af9b3f82d2d229d"},{url:"post/oj/zerojudge/b294/",revision:"a178594b3f412a805a19b8d9935015cb"},{url:"post/oj/zerojudge/b558/",revision:"f3845bef28e3b92ce27013ffc4ce5d2c"},{url:"post/oj/zerojudge/b572/",revision:"16e92e97dd0a4cbe1a3afb17fba15dc7"},{url:"post/oj/zerojudge/b758/",revision:"cb14cacc17a111b9e729e62899cb9093"},{url:"post/oj/zerojudge/b759/",revision:"72575ed80a98e63531c3188c08ccfe5b"},{url:"post/oj/zerojudge/d086/",revision:"e74ebb6a9652c4f5f9698a1257b26e71"},{url:"post/oj/zerojudge/d098/",revision:"727c4c047affeb9014c217c162984839"},{url:"post/pixiv/",revision:"f0aee3df73b8e90517b9321433333af0"},{url:"post/practice/week-01/",revision:"322bee793f41f994edeaac8da44b138f"},{url:"post/takming-dormitory-about/",revision:"4a3f74472626a9c86a00c7b75d3e0422"},{url:"post/tool/word-mdeditor/",revision:"3d69f83ae021d191a44d1c32e46baaa0"},{url:"Privacy-Policy/",revision:"55dc0a439666d4783e4b4b95e2406df0"},{url:"pv/",revision:"74201a184c7f4ba89224adc18c9d0c5f"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"80b2858d9119d15af913370e2e37e1a0"},{url:"tags/C/",revision:"1dbbaaae28d88d011badf977c4edd218"},{url:"tags/HEXO/",revision:"0c42da6b1951526cf95c9ab916555b4a"},{url:"tags/",revision:"49a2ec9ab58461458d40d4954e4bdab9"},{url:"tags/JAVA版/",revision:"f1b54cf62e332735070206409eac287a"},{url:"tags/LeetCode/",revision:"9eb1a518e3bec3f1949530fe6937773a"},{url:"tags/Minecraft/",revision:"affd2deee45c7f9df1b801d89064691a"},{url:"tags/Python/",revision:"24d27ada00dc41fca5093e9997933026"},{url:"tags/Python/page/2/",revision:"ea3cb6e8c379074d5f0aeac1f413afbe"},{url:"tags/Python/page/3/",revision:"f85da536b9a0991a0c5ee0005d8b8289"},{url:"tags/Python/page/4/",revision:"f8b3f31aff4a9290e38ac426354bc4df"},{url:"tags/ZeroJudge/",revision:"14d966b83ed3ba2a0e06ed15f9bf7f7f"},{url:"tags/ZeroJudge/page/2/",revision:"a133c90b662c0049c05031bab0997ce7"},{url:"tags/ZeroJudge/page/3/",revision:"084552eca169ec555d785670c6a387ae"},{url:"tags/ZeroJudge/page/4/",revision:"892845e7a3aa2d6bc8fa74b08a68eb32"},{url:"tags/機械式鍵盤/",revision:"f3815aa61f8b5387d4cbc59af988f121"},{url:"tags/解題答案/",revision:"bb115127a2575bf6b5eb7a651d9ade19"},{url:"tags/解題答案/page/2/",revision:"d95e57953fdf9f75cfec06b498d7eda3"},{url:"tags/解題答案/page/3/",revision:"c81c95aefbdc65b680d06c1169f89fe7"},{url:"tags/解題答案/page/4/",revision:"71efc7077df5db6d80d737621f2c6182"},{url:"timeline/",revision:"07336afb73c3b9d8b121f021252bc33c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));