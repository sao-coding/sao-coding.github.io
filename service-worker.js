if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const s=e=>r(e,o),f={module:{uri:o},exports:d,require:s};a[o]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"91e33ae51690ae2164c86be9f75ee4af"},{url:"announcement/",revision:"9f65939d18b9e275ea45d40bcb6323e8"},{url:"archives/2022/01/",revision:"ba6e78fb24c901a2ce79fca9aae50e3f"},{url:"archives/2022/02/",revision:"2c38c172d4262ce613a3bec913efcbd2"},{url:"archives/2022/02/page/2/",revision:"c88c8b5b97969aaac2857f7ef4f3bbb5"},{url:"archives/2022/02/page/3/",revision:"576ff72202d0b3387992802517e07ac1"},{url:"archives/2022/03/",revision:"7a85c22aa6e3376da4f9dc30a1a62e9c"},{url:"archives/2022/04/",revision:"921dd510564db19d8dd01a308fa4e228"},{url:"archives/2022/05/",revision:"a9eb4980c6bd22b66dc3e397f53d77e4"},{url:"archives/2022/08/",revision:"f1c285116fa03d4b75fad93091a91ed5"},{url:"archives/2022/",revision:"518ac214d522479e0dbb9dae5c4aa5be"},{url:"archives/2022/page/2/",revision:"401f8d66021aac80ec6a88563e495634"},{url:"archives/2022/page/3/",revision:"d53c63f2d2f0b95b565603bdf0c41163"},{url:"archives/2022/page/4/",revision:"f94aee22d43ca583cd21c4da2341e529"},{url:"archives/2022/page/5/",revision:"55df04b79f8bd8a8dc8529b76a03948a"},{url:"archives/",revision:"e4561a856e6e1b55323f71b57629c05c"},{url:"archives/page/2/",revision:"24aeb928d2903c810fa02f3eeb0b0007"},{url:"archives/page/3/",revision:"e4ca7fe301469086be5f312a9e2ec8b7"},{url:"archives/page/4/",revision:"1fcea3df9eb9fbd3aa655cd83adf4bf3"},{url:"archives/page/5/",revision:"b8f18fdad6e2264b7edf2b482b571a04"},{url:"backstage/",revision:"e1b1a7fc6163ca87541834dfe2beac16"},{url:"bangumis/",revision:"d782667473175e6bf110ebcd12dffc7d"},{url:"categories/HEXO/",revision:"ad0b6b79692c08fb424350b35254db2c"},{url:"categories/",revision:"5de24a6a8a39d28715ca6a4f180f307c"},{url:"categories/LeetCode/",revision:"c2225b27ec1c048603d6d91393bfc4db"},{url:"categories/ZeroJudge/",revision:"0af39827f28d3d4faaa1b9599eaa6418"},{url:"categories/ZeroJudge/page/2/",revision:"c844908170ca552bb19970c32a277dcd"},{url:"categories/ZeroJudge/page/3/",revision:"c3bc2edfff9f9af4fe3d28163be4e1f5"},{url:"categories/ZeroJudge/page/4/",revision:"f8d62b9e688edebfa766e889146b4abe"},{url:"categories/宿舍活動/",revision:"be3994dd461b9a3d7752aca206d75e01"},{url:"categories/工具/",revision:"602604c905297ac6f0ad62e846e51059"},{url:"categories/練習題/",revision:"85b76aaca8ff32b955772df1a1fbcc5d"},{url:"categories/鍵盤/",revision:"9f171bda6e6979cd631c3dc51257b62f"},{url:"comments/",revision:"5308e1efe93e048ab4a2a0519869a66f"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"622f74f3a70802b2564f474c51e25c6d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"19717bd5fbd80e3115a7548ecc6d768a"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"hpptalk/",revision:"5ff9c975aaf462c918e3f553670d09ca"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"a1ef73a29cdb055607239b4d66d90d23"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"735ff35496f8e108ed453ab967c53e79"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"349c6a8302ef6883e81b291f220fb8d3"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"58999e07e618000c8bb7336f396e79b4"},{url:"page/2/",revision:"a6986b07be09c468436f653440f93111"},{url:"page/3/",revision:"c6a2c48d787993bc0c7d83ea456afeee"},{url:"page/4/",revision:"76e910219f968e92821ca6491d7bc68b"},{url:"page/5/",revision:"46ec8fb0bd026d98bf63ce03e4030025"},{url:"post/cover/",revision:"f9e948e656b54952d4e0fa53dc8b7f92"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"120e655fb9306ba527fd145fa4fa7bd7"},{url:"post/oj/leetcode/1. Two Sum/",revision:"cfddf6d3a04f0c57bdc4d499359d48c9"},{url:"post/oj/zerojudge/a001/",revision:"71d743ef6d28130e51c5ecc7d8e148cc"},{url:"post/oj/zerojudge/a002/",revision:"577f4571a0651c85b30bac884a3475d7"},{url:"post/oj/zerojudge/a003/",revision:"2876f6b1e985e379717db3a7605d7118"},{url:"post/oj/zerojudge/a004/",revision:"514097fb2f6a0ba887af7427ce21c82d"},{url:"post/oj/zerojudge/a005/",revision:"b1847d27d12ba9309946c98348fce803"},{url:"post/oj/zerojudge/a006/",revision:"fc9931974809ebd7294e75ce6ef0019c"},{url:"post/oj/zerojudge/a009/",revision:"88e5b2ce6cc32012c943912f8651e958"},{url:"post/oj/zerojudge/a010/",revision:"a280fb101b37e3675bd04a5100a5cb66"},{url:"post/oj/zerojudge/a015/",revision:"c9c0cd90ed92368e99f488e40d997dea"},{url:"post/oj/zerojudge/a017/",revision:"11a78a6ecf68649a6e83dbc02cc9aea6"},{url:"post/oj/zerojudge/a020/",revision:"e1b2e2a4f20ec8e1384f45a5a01ef0f6"},{url:"post/oj/zerojudge/a021/",revision:"09adf60a6fa935be1b593b68c5cf0600"},{url:"post/oj/zerojudge/a022/",revision:"b97998f52ab5ffa98208efd6956bc1bf"},{url:"post/oj/zerojudge/a024/",revision:"782f3e6589945b48bf939cca86bd0a66"},{url:"post/oj/zerojudge/a034/",revision:"3298a07df6f8d4e8a027cf239561481b"},{url:"post/oj/zerojudge/a038/",revision:"46f023a2400b3cd54cd090343e5e0b95"},{url:"post/oj/zerojudge/a053/",revision:"3f53c33b275c39c04d7bf51b6fab2c35"},{url:"post/oj/zerojudge/a058/",revision:"470297ab5c9c491fbfbf6b4df702352c"},{url:"post/oj/zerojudge/a059/",revision:"51998802010ae3f849a141efd8479857"},{url:"post/oj/zerojudge/a065/",revision:"50929f545f143c3045d8842b93d606a0"},{url:"post/oj/zerojudge/a104/",revision:"f24ea6b9c160e69804e0447b319a070a"},{url:"post/oj/zerojudge/a147/",revision:"e2a753d9e0227e5c7f89281c34532f9f"},{url:"post/oj/zerojudge/a148/",revision:"02a9530fc5fb1a30973dfa914d19c746"},{url:"post/oj/zerojudge/a149/",revision:"56144ff1b0949e3df0e7fa1c944cf6eb"},{url:"post/oj/zerojudge/a215/",revision:"32b5a585c17efb58518546f9ce98dc5d"},{url:"post/oj/zerojudge/a244/",revision:"081f9560407114819078063d75cc97b2"},{url:"post/oj/zerojudge/a263/",revision:"a50941e2531049e657060d8695c58287"},{url:"post/oj/zerojudge/a528/",revision:"bf4c5cd90b487b7e809f2c2f7fc4b87e"},{url:"post/oj/zerojudge/a738/",revision:"cbe214e0572c10b578f1cba95bcbf8cb"},{url:"post/oj/zerojudge/a799/",revision:"5f6d53fe217a242cb7713ec61274de6b"},{url:"post/oj/zerojudge/a915/",revision:"69c6e24b5ca05ad664f1ec8162fb0e6d"},{url:"post/oj/zerojudge/b294/",revision:"14ddc3cd97991258dcc8c55bf0844433"},{url:"post/oj/zerojudge/b558/",revision:"6eeccc26158db919fe56c739e9b4fdaf"},{url:"post/oj/zerojudge/b572/",revision:"5122d3a48cdb6c797bdde451a7316436"},{url:"post/oj/zerojudge/b758/",revision:"14b655b9901128c5ce5ca21059a4b606"},{url:"post/oj/zerojudge/b759/",revision:"4f1f0385afef8afee76f9d550dd12b50"},{url:"post/oj/zerojudge/d086/",revision:"f2692714ac335359ecbec92154fcc993"},{url:"post/oj/zerojudge/d098/",revision:"c8afa14153833d691460c1dbc5bc1c48"},{url:"post/pixiv/",revision:"e966745eca1500a272b7ca1bbbf0825c"},{url:"post/practice/week-01/",revision:"a20a3c7dd59a9a41e73605636ae528d0"},{url:"post/takming-dormitory-about/",revision:"f5f9b640c1d53b51ddc2b84f27e17f2b"},{url:"post/tool/word-mdeditor/",revision:"e7fd2a6330dff10c2d778decdffff2c7"},{url:"Privacy-Policy/",revision:"245189b1cec9e7a4cdfa4d0e71b6ce3c"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"fe57fb411204259d01b081f924022888"},{url:"tags/🦋-Butterfly/",revision:"664a0d9cba14e15a069c29cf9e6c6557"},{url:"tags/C/",revision:"ab947fc458a41909e67336d78c90a449"},{url:"tags/HEXO/",revision:"715ff456fd78100efd1d04789c5ea7f6"},{url:"tags/",revision:"9ed058b714971a3fd509a36db0674b4b"},{url:"tags/LeetCode/",revision:"b189aaf82662b99043845d14b493017f"},{url:"tags/Python/",revision:"171a54ea8f955ec9842abca122647b2e"},{url:"tags/Python/page/2/",revision:"84522eb54b8b3cc38eec0843425fd436"},{url:"tags/Python/page/3/",revision:"48d78f06c436d7e975296cf8d7bf4c6f"},{url:"tags/Python/page/4/",revision:"e378e57924a28a95c7ff8b9d5acd022f"},{url:"tags/ZeroJudge/",revision:"49400feeb8ff86edf9b09d138d0c7b35"},{url:"tags/ZeroJudge/page/2/",revision:"3a1a31998f40b5c2413d8557bb46794d"},{url:"tags/ZeroJudge/page/3/",revision:"63229cafcf8a1ff717c662e4cd774780"},{url:"tags/ZeroJudge/page/4/",revision:"66d7658872858060adeab428240c7089"},{url:"tags/機械式鍵盤/",revision:"544722a0484d6344db1bc585496b9752"},{url:"tags/解題答案/",revision:"b6c706f02dbaf53b55c7133f6377ad31"},{url:"tags/解題答案/page/2/",revision:"1089f8a17cb6958adabc858fda3fa5d3"},{url:"tags/解題答案/page/3/",revision:"cf27a076fa6647ab65d6ebcc1d169935"},{url:"tags/解題答案/page/4/",revision:"708f33c619c206cc04471fa3bf7bc093"},{url:"timeline/",revision:"0bd9902313b64c0d85103a04ec239b6f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
