if(!self.define){let e,d={};const r=(r,c)=>(r=new URL(r+".js",c).href,d[r]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=d,document.head.appendChild(e)}else e=r,importScripts(r),d()})).then((()=>{let e=d[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(d[o])return;let s={};const f=e=>r(e,o),a={module:{uri:o},exports:s,require:f};d[o]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(i(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"announcement/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/01/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/02/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/02/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/02/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/03/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/04/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/05/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/08/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/page/5/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/page/5/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"backstage/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"bangumis/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/HEXO/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/LeetCode/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/ZeroJudge/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/ZeroJudge/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/ZeroJudge/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/ZeroJudge/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/宿舍活動/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/工具/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/練習題/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/鍵盤/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"622f74f3a70802b2564f474c51e25c6d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"hpptalk/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"735ff35496f8e108ed453ab967c53e79"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"349c6a8302ef6883e81b291f220fb8d3"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"page/5/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/cover/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/leetcode/1. Two Sum/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a001/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a002/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a003/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a004/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a005/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a006/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a009/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a010/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a015/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a017/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a020/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a021/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a022/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a024/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a034/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a038/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a053/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a058/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a059/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a065/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a104/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a147/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a148/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a149/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a215/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a244/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a263/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a528/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a738/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a799/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/a915/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/b294/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/b558/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/b572/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/b758/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/b759/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/d086/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/oj/zerojudge/d098/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/pixiv/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/practice/week-01/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/takming-dormitory-about/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"post/tool/word-mdeditor/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Privacy-Policy/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"9c1435013ed2f74717b1d82960a73bdd"},{url:"README.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/🦋-Butterfly/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/C/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/HEXO/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/LeetCode/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Python/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Python/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Python/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Python/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/ZeroJudge/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/ZeroJudge/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/ZeroJudge/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/ZeroJudge/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/機械式鍵盤/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/解題答案/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/解題答案/page/2/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/解題答案/page/3/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/解題答案/page/4/",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"timeline/",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
