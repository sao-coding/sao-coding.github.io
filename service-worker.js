if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const s=e=>r(e,o),f={module:{uri:o},exports:d,require:s};a[o]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8a1229139da6ed15e060c6c9da5770ec"},{url:"announcement/",revision:"ec92f279e45a759c74cf69c46fc1f43b"},{url:"archives/2022/01/",revision:"bdc74d7d0a3e12b452f6020b68eb7345"},{url:"archives/2022/02/",revision:"ef199b64117662c0fca44a67accdc1ad"},{url:"archives/2022/02/page/2/",revision:"6b6fa713b9d6486708d426e003def324"},{url:"archives/2022/02/page/3/",revision:"fed012c0e950e88f5dac9507c7c19bc4"},{url:"archives/2022/03/",revision:"9068d58ed690a690918d0662da53d14f"},{url:"archives/2022/04/",revision:"9d52b6cc33c35340acad9675aad0ccb2"},{url:"archives/2022/05/",revision:"638a319d4dc4327202238552f26f5999"},{url:"archives/2022/07/",revision:"fe9a45100c6c447655b4fab02abe8e81"},{url:"archives/2022/08/",revision:"2394f461836ceab573dc8c43af0c7a91"},{url:"archives/2022/",revision:"c4e28dc4eeb68aeb2c0fd485fecf6c9e"},{url:"archives/2022/page/2/",revision:"08e1a3e0b9909346c3fc0298a2112208"},{url:"archives/2022/page/3/",revision:"e0af3556a385aa97c4dc99ac24aed335"},{url:"archives/2022/page/4/",revision:"3e0514605813b89c80a8752a985467ff"},{url:"archives/2022/page/5/",revision:"6382076986fbc272f1b90199445644c3"},{url:"archives/",revision:"22693ffb179953989e824a75d886b96c"},{url:"archives/page/2/",revision:"01d4fa3e8c7a29a5dedff49db0239d2f"},{url:"archives/page/3/",revision:"41726197fece6360cd3821a59729d587"},{url:"archives/page/4/",revision:"5c78d037ac7a20fc551b451769b8c201"},{url:"archives/page/5/",revision:"943067de27b0b6561283db8026eae097"},{url:"backstage/",revision:"a0968028957d86297a59b543fdd2bf6a"},{url:"bangumis/",revision:"bfb4214916c971cf8d62f11c49f1e1bf"},{url:"categories/HEXO/",revision:"9fc37f7be0ba778e9704448e299a3084"},{url:"categories/",revision:"6947f0f60db6800bcb4359eae0278aa3"},{url:"categories/LeetCode/",revision:"203e99e8d26b32be6ab9bcc27804d708"},{url:"categories/ZeroJudge/",revision:"f69252487a4a8cf50759d53b09068c1e"},{url:"categories/ZeroJudge/page/2/",revision:"82d5ccdde0ab78e5b14740cc0b5eafd0"},{url:"categories/ZeroJudge/page/3/",revision:"e2b7f792e0fda2b2bfaef40430d6e81c"},{url:"categories/ZeroJudge/page/4/",revision:"909ba9e04b88238a795d44ae6456c6de"},{url:"categories/宿舍活動/",revision:"31979980ff74227fe567f9e3707d2aa4"},{url:"categories/工具/",revision:"42e0eba0ca4db8e0cf0d3ff48ae50bc7"},{url:"categories/練習題/",revision:"49caffaa16839801bd171cf883449aae"},{url:"categories/遊戲/",revision:"4d2eb7f7bcdde981a424e69584e056fa"},{url:"categories/鍵盤/",revision:"5a44fd87558d95049b612e02d0233864"},{url:"comments/",revision:"203363064fa766f7ba4d4b2940f1830d"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"97a28e4a117e416947c0b32b9e9754b9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"9176a2759a405d027ccbc01aee955cfb"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"94e0f724706d786156d4e4f9f8882f37"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"85f1dee1f422b8ba7162ea8889b71e6a"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"a29d25a583fe40d9938f1c0359bf3209"},{url:"page/2/",revision:"13ccb92227cecc22ba0e3edf2025f93c"},{url:"page/3/",revision:"e82e4e9bbb4de960e017a107e71140e3"},{url:"page/4/",revision:"5671e8d5e1704798e995cb2f1c10fb9a"},{url:"page/5/",revision:"c78ca7c9ac8c69180cf46a8ac83b1225"},{url:"post/cover/",revision:"7b01aeb314c1500f7174ac5d067d244b"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"187c9b935fc0daf73180d720ac9e02c4"},{url:"post/minecraft-java/",revision:"577c56341b05f8cb24534314aa38a3db"},{url:"post/oj/leetcode/1. Two Sum/",revision:"ae6dce6e3f8ff346c468ec1337a21d05"},{url:"post/oj/zerojudge/a001/",revision:"0cc5bfbdc090b8271a6a79672ad33fc7"},{url:"post/oj/zerojudge/a002/",revision:"f61351e5126e8743b9232224619e37db"},{url:"post/oj/zerojudge/a003/",revision:"f7c35a012da9bb004e9145a041b0b504"},{url:"post/oj/zerojudge/a004/",revision:"438b49ebb64f8fe080568fe7b10cfc6b"},{url:"post/oj/zerojudge/a005/",revision:"7478cb8e9fe3c17b79d24821d71c70c0"},{url:"post/oj/zerojudge/a006/",revision:"7dd31fda22bfbe55c49a8c1f7b224dc3"},{url:"post/oj/zerojudge/a009/",revision:"e082aa2060c28130a72580ef77b36657"},{url:"post/oj/zerojudge/a010/",revision:"9aa6e79545b44c00c81835380c8ee332"},{url:"post/oj/zerojudge/a015/",revision:"435b3664ed5abf1a7eaa7e7a8393d707"},{url:"post/oj/zerojudge/a017/",revision:"65110a207bd78ed58c53e753711434fd"},{url:"post/oj/zerojudge/a020/",revision:"a3a96da4c9a9e0f3309f715cf71b10e0"},{url:"post/oj/zerojudge/a021/",revision:"6266a03ddcfe2218012e086804409f18"},{url:"post/oj/zerojudge/a022/",revision:"a006baf707dcf77867ea44ff681b340c"},{url:"post/oj/zerojudge/a024/",revision:"b8c99e187e8141f0126ce5186d8f25f2"},{url:"post/oj/zerojudge/a034/",revision:"ebd4eb9aeb8a52a26c29f5d7f7493b8c"},{url:"post/oj/zerojudge/a038/",revision:"eb5b284ca6487f1f4c29b45483767743"},{url:"post/oj/zerojudge/a053/",revision:"61a02a8ab911a192b44757ddab0283e6"},{url:"post/oj/zerojudge/a058/",revision:"957b399ac839938bcc8c6d706e90cb05"},{url:"post/oj/zerojudge/a059/",revision:"7548425b3cdaf5accf65a17c34c32864"},{url:"post/oj/zerojudge/a065/",revision:"8d57d166a598666797a3608fd30391f2"},{url:"post/oj/zerojudge/a104/",revision:"9b608d9226365d2ba76eeae5d1c0aad0"},{url:"post/oj/zerojudge/a147/",revision:"e99fc43cc67f7d71505c83474ebe746b"},{url:"post/oj/zerojudge/a148/",revision:"26dcc349cc8f2e61525a0a8adff8d760"},{url:"post/oj/zerojudge/a149/",revision:"84cf3ba9b88eac4e2bf981674dd03d18"},{url:"post/oj/zerojudge/a215/",revision:"d51737038623af5282a1e533d077ed55"},{url:"post/oj/zerojudge/a244/",revision:"508c567f0b8ba191683e7007809f3604"},{url:"post/oj/zerojudge/a263/",revision:"4fd2e6655fbef877cc53aa592d4b24fd"},{url:"post/oj/zerojudge/a528/",revision:"05f60654212ca4b8e7a90a2b7c3de8d3"},{url:"post/oj/zerojudge/a738/",revision:"3c06a25ac3eac913269a5aac287dd0d5"},{url:"post/oj/zerojudge/a799/",revision:"33a1387e464610259658429f527bdca8"},{url:"post/oj/zerojudge/a915/",revision:"5a4c5727e2945ee0ed526b903a49001a"},{url:"post/oj/zerojudge/b294/",revision:"d820404cc707d5b688339e4702ea7722"},{url:"post/oj/zerojudge/b558/",revision:"3e28f567962c138f06137a62252d454f"},{url:"post/oj/zerojudge/b572/",revision:"f3028227679c429e99b389aa4cdd22a7"},{url:"post/oj/zerojudge/b758/",revision:"97eb5855a2b75a7cbf55541e2f6210b5"},{url:"post/oj/zerojudge/b759/",revision:"0b3ab6165f164c73137ab6fbc93c6816"},{url:"post/oj/zerojudge/d086/",revision:"237a59605b19542aa2b92fb21eac4531"},{url:"post/oj/zerojudge/d098/",revision:"7dc7262a006cb24ef9612a6fd05767c5"},{url:"post/pixiv/",revision:"cc78ca8f16f110f30d86add301ff9298"},{url:"post/practice/week-01/",revision:"0688f2fd0490c1f976755e457231e413"},{url:"post/takming-dormitory-about/",revision:"bf32fe779dca6c92298d4497341ab5a5"},{url:"post/tool/word-mdeditor/",revision:"4f4f79c375b4f86f01de95b1d0daa521"},{url:"Privacy-Policy/",revision:"04c3dfc06575a8d67fd1070fb9d46dae"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"df582392103c835425dbe6ed1bbcd1c9"},{url:"tags/🦋-Butterfly/",revision:"1a0277fb819ffc93a7564973f7f52c86"},{url:"tags/C/",revision:"c326db89c67aaf7400726f09cea0821b"},{url:"tags/HEXO/",revision:"bd5707f921eba8746343c90cb40be932"},{url:"tags/",revision:"cc9b2aef78a84db42596e3e678932427"},{url:"tags/JAVA版/",revision:"b99afa349241d3d99283796611310d15"},{url:"tags/LeetCode/",revision:"e14c355d7a85e4f188f5546ac34aaf87"},{url:"tags/Minecraft/",revision:"206556491a78472f80198f895c60721c"},{url:"tags/Python/",revision:"22f0fd0c08f4a8fcbf805443bba116f0"},{url:"tags/Python/page/2/",revision:"49d6db9f4426a39a63164e8fcc3bab35"},{url:"tags/Python/page/3/",revision:"39f1bb58f0cb1d8941ad34a6aaedc5cb"},{url:"tags/Python/page/4/",revision:"f3653c9729babcdd2da5190ec7d76e73"},{url:"tags/ZeroJudge/",revision:"3c0b7e56493dba0b3f3315fd1a8c9a17"},{url:"tags/ZeroJudge/page/2/",revision:"de879a8e938e61a75a9055ceb2251352"},{url:"tags/ZeroJudge/page/3/",revision:"f890a117a3a77349ff1fcdd7e0e31f7d"},{url:"tags/ZeroJudge/page/4/",revision:"81d45e226a3797652e8b33c0582546bf"},{url:"tags/機械式鍵盤/",revision:"60082e7e33e65d15830b95427ce4a83d"},{url:"tags/解題答案/",revision:"7f18c1cf0e182a327b41bab4dfa5b0b7"},{url:"tags/解題答案/page/2/",revision:"b55a8090ec751298839053aab8519dd6"},{url:"tags/解題答案/page/3/",revision:"824e3c1bf223efb13f7245c3f62e50bb"},{url:"tags/解題答案/page/4/",revision:"509587a3e7d639ae3b743ecd67de6a2e"},{url:"timeline/",revision:"fdaa791dfb7c387bba535733a89f75fb"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));