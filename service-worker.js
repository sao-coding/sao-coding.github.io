if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const s=e=>r(e,o),f={module:{uri:o},exports:d,require:s};a[o]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2a878d8c98eee2a85d588be7151e3c0d"},{url:"announcement/",revision:"18abd6db41d49e756abedc7e77a4ad7c"},{url:"archives/2022/01/",revision:"fa21e9aa907e9bfb9d51a44e8fa668c2"},{url:"archives/2022/02/",revision:"22763cf597c577d3459c37426e1e0b88"},{url:"archives/2022/02/page/2/",revision:"709b24364f81da2c6beae9bf59cc194f"},{url:"archives/2022/02/page/3/",revision:"4a5583bd0bbaf13d9a67530cade55ab5"},{url:"archives/2022/03/",revision:"09501cb144e601a0f873ee84592b50cb"},{url:"archives/2022/04/",revision:"7259398bceb11d934a976e9099e5718a"},{url:"archives/2022/05/",revision:"db751b4fec49e06bd104ff72f1807037"},{url:"archives/2022/07/",revision:"a162e9a9adba2dc8e88fb2485f41ff1b"},{url:"archives/2022/08/",revision:"d5586818ec7d24c881a74eaf59ecd9e8"},{url:"archives/2022/",revision:"3a0ac7c0a549b748e54187d890b690c2"},{url:"archives/2022/page/2/",revision:"617ca498668395aa1d0268a7b1b5a085"},{url:"archives/2022/page/3/",revision:"f7a48cfc237e6504b83a0008baae7927"},{url:"archives/2022/page/4/",revision:"b0671450a01ca30eaf0aff21334aab9f"},{url:"archives/2022/page/5/",revision:"522dfc043bbe1ded3db0f00c47e1f1a7"},{url:"archives/",revision:"7911e4daeed36e7ff619a89035a22645"},{url:"archives/page/2/",revision:"e487e842c22a6a191ddc9f9f0d99d1a8"},{url:"archives/page/3/",revision:"6418b8a1702f188688df0f6b50081c24"},{url:"archives/page/4/",revision:"df75e61180fc53bee92ea037aa1be290"},{url:"archives/page/5/",revision:"1ddf43695484384a58d44bee3c351e98"},{url:"backstage/",revision:"7288a529cfff2b4f30a787c2c117c740"},{url:"bangumis/",revision:"e952472649585dcfe0a52ea16fbd0dd9"},{url:"categories/HEXO/",revision:"1f5df55092b23a227b549573aecddaeb"},{url:"categories/",revision:"5fd28cb5db5aa18995585957a748d9ae"},{url:"categories/LeetCode/",revision:"676d6085b5029c4f267e6d06ca27fd48"},{url:"categories/ZeroJudge/",revision:"628bd25da0daa83772703a28c370f7f8"},{url:"categories/ZeroJudge/page/2/",revision:"ee5a8002efda6f3155ff675f1881abdc"},{url:"categories/ZeroJudge/page/3/",revision:"d8c38e981cbea128d271153f945afe13"},{url:"categories/ZeroJudge/page/4/",revision:"2dd6d40d3faf503c5ff43241355bde1d"},{url:"categories/宿舍活動/",revision:"b3126342b8efcc6ea26a449f70a2caa5"},{url:"categories/工具/",revision:"acbb9f45dc2d42878bc8d3747832e30b"},{url:"categories/練習題/",revision:"2b57366271b1e47bb4f9859fd2c530f3"},{url:"categories/遊戲/",revision:"80db4351ed7ac02f6d5f215968c861ec"},{url:"categories/鍵盤/",revision:"38b0a3a547a4702a4346bcfbe7864291"},{url:"comments/",revision:"c1f9c6a7e31a4d70583c33df34f782e8"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"6cb9bd3c8f3aca7d0fa698870aa38eff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"aac0fe2cc510f4352086c191f8877f4a"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"b1007b378fd6dc305b4a22f1b3a766d4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"663634be6abf4aad7a34a09a677b947f"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/custom/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/custom/universe.js",revision:"df3e74f701dfc1379342871273c8c014"},{url:"js/custom/wow_init.js",revision:"63bfe63fafe66b52f51b7add85f86447"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"8311e8f11a97fc0ecb355d6a36ba6838"},{url:"page/2/",revision:"4efaa6f647da917aaa3d7f20c992a5a5"},{url:"page/3/",revision:"b9cef0082490f8a8da369a63f510ec08"},{url:"page/4/",revision:"d81d256c04b47983030f22406d7fed6e"},{url:"page/5/",revision:"fbec822495440f676308eb22b3432e30"},{url:"post/cover/",revision:"cd62c08ca7853c5459c477d46fe101e1"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"19c00ad9f38d76fa8af669821eba365a"},{url:"post/minecraft-java/",revision:"c100afdaa4dd1e4ac0e58b8a15b45795"},{url:"post/oj/leetcode/1. Two Sum/",revision:"695dadbaaf240ac098da3017b44cc068"},{url:"post/oj/zerojudge/a001/",revision:"8b07d0886b26a5a8d76be1340cd74b3c"},{url:"post/oj/zerojudge/a002/",revision:"988af20cfb94cedf255389eb0ffb8fb4"},{url:"post/oj/zerojudge/a003/",revision:"9c99994fa00867d70b42f8c5fedb742e"},{url:"post/oj/zerojudge/a004/",revision:"91028e6e32d0e43a1c4fa954f84f8d27"},{url:"post/oj/zerojudge/a005/",revision:"5bf28d5b6324b91730a6bc20173d97d0"},{url:"post/oj/zerojudge/a006/",revision:"b8dcb2393a14c7f11c5a7c7f4c5edcb7"},{url:"post/oj/zerojudge/a009/",revision:"46966aa6239f86b89eb87bf5c635797a"},{url:"post/oj/zerojudge/a010/",revision:"23f9e21297ea2ec7c6d81323d163ab34"},{url:"post/oj/zerojudge/a015/",revision:"0f3216bf437fea0a04f94ea44d6c15a1"},{url:"post/oj/zerojudge/a017/",revision:"fae86f390bad044c0930847eac5a03ea"},{url:"post/oj/zerojudge/a020/",revision:"91d4884b0984b69eba8b7fce402580d9"},{url:"post/oj/zerojudge/a021/",revision:"509e9f8c3f1c52f5d5240409d180f75f"},{url:"post/oj/zerojudge/a022/",revision:"edb10a3a3032cbd8021bbebc123c3cb8"},{url:"post/oj/zerojudge/a024/",revision:"36abc9f90fc128117daa36748439a6be"},{url:"post/oj/zerojudge/a034/",revision:"c298016e61055e685c8862dbfe6a5af4"},{url:"post/oj/zerojudge/a038/",revision:"0c400d29aa3966f6cc3bb33ae3a86243"},{url:"post/oj/zerojudge/a053/",revision:"c36162e6440e5c1145708e94b7399b0a"},{url:"post/oj/zerojudge/a058/",revision:"624a722ea70cc9c9ba459563f7041e1f"},{url:"post/oj/zerojudge/a059/",revision:"d04b8fb600b06ea82a8e7096a03b2510"},{url:"post/oj/zerojudge/a065/",revision:"01595f60d60207d89125bd2b04446040"},{url:"post/oj/zerojudge/a104/",revision:"e8cd007e636ec9ee70f066e61850eae9"},{url:"post/oj/zerojudge/a147/",revision:"37437c38c9f7c6a92cbf6b04e2112f9d"},{url:"post/oj/zerojudge/a148/",revision:"7ffc9d53cb39a5a05a60cbdb149d8917"},{url:"post/oj/zerojudge/a149/",revision:"e16ec979ea25b3e8682640b3a0958e4b"},{url:"post/oj/zerojudge/a215/",revision:"1656a2daa8b57f65d1993b79f5c5b850"},{url:"post/oj/zerojudge/a244/",revision:"fea7494899671cd47aa225b6ffbd1506"},{url:"post/oj/zerojudge/a263/",revision:"ad39eb6da24a5e6ccb73b32176f811f9"},{url:"post/oj/zerojudge/a528/",revision:"592654048b87ea7277c6ab1b484941f8"},{url:"post/oj/zerojudge/a738/",revision:"90a76c7d4cecf392b461ac34491e68c4"},{url:"post/oj/zerojudge/a799/",revision:"4555f46f081e7fd85a9af4863b5cbfee"},{url:"post/oj/zerojudge/a915/",revision:"ceb0214c81313d72022e5d6724860557"},{url:"post/oj/zerojudge/b294/",revision:"624608f2f1febe840b3a5e340c036b6c"},{url:"post/oj/zerojudge/b558/",revision:"5134b99f1cd50fe3f3f2fe8dc68c3aff"},{url:"post/oj/zerojudge/b572/",revision:"18f5649caf9320079603377941a61361"},{url:"post/oj/zerojudge/b758/",revision:"1311f863eb739393ce160320a39391d1"},{url:"post/oj/zerojudge/b759/",revision:"4fb8248df68f023f35ce6d21bfc64e24"},{url:"post/oj/zerojudge/d086/",revision:"684f5e3401169f7b3d19f73c167a7b27"},{url:"post/oj/zerojudge/d098/",revision:"edc1cb1a518ca36cb6bc7f4aada38abe"},{url:"post/pixiv/",revision:"2c70b2a4a0e9e05f9e5bbafc73e1589d"},{url:"post/practice/week-01/",revision:"aa609dc2ea54883572d0b44af7e3c957"},{url:"post/takming-dormitory-about/",revision:"fd0751f216fcccb026c18ad937a308f4"},{url:"post/tool/word-mdeditor/",revision:"fa4a8d25dc0efb872fe0010812562cea"},{url:"Privacy-Policy/",revision:"cf5ff3528f0dc7cb7140d2befb0fcf77"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"5cd013ff5ae2c1a8517379246daef143"},{url:"tags/C/",revision:"9432e3dc4f283d849e6c37a6046642dd"},{url:"tags/HEXO/",revision:"06ab95be116b8fdbf2ca60144537ac6c"},{url:"tags/",revision:"fb279c0236a7a331436e710b65922ea3"},{url:"tags/JAVA版/",revision:"a85bd8a67ff04f3682eebcce0c5597ac"},{url:"tags/LeetCode/",revision:"8e81dcc66779221a6764556149f16c09"},{url:"tags/Minecraft/",revision:"7e3545ec4a3b2b46bd8968121af32f0f"},{url:"tags/Python/",revision:"5e00fb7a01a0cbffc5a3e55c6b4c5a2d"},{url:"tags/Python/page/2/",revision:"2731dbb62a4b097152fb0fdf4ed985c4"},{url:"tags/Python/page/3/",revision:"d1b5b81ce562b2c4e66f522baad000b3"},{url:"tags/Python/page/4/",revision:"0c6fc9badc32b0d0bb3e431d863337a8"},{url:"tags/ZeroJudge/",revision:"64616d2c5b032355bd2748558149aac2"},{url:"tags/ZeroJudge/page/2/",revision:"8791b8a68166728666ff05f33df8ce48"},{url:"tags/ZeroJudge/page/3/",revision:"2099ce1a664b93300f59e555f4f7d71e"},{url:"tags/ZeroJudge/page/4/",revision:"4eb5b13343aed8ff193e3fed3467d00b"},{url:"tags/機械式鍵盤/",revision:"901dc48e05caa3ffa4da7520bcac01d8"},{url:"tags/解題答案/",revision:"e3749c01efbcf1c07e9d2a98120c8480"},{url:"tags/解題答案/page/2/",revision:"088e2139119b0692b04a5e4b71768359"},{url:"tags/解題答案/page/3/",revision:"914784220fe3e09aab6751835c19963b"},{url:"tags/解題答案/page/4/",revision:"3a21d0a1bd05e6698e20f93c471507c3"},{url:"timeline/",revision:"4506f802dacc0018ee54cd8757bf63e1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));