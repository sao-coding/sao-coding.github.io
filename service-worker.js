if(!self.define){let e,a={};const r=(r,i)=>(r=new URL(r+".js",i).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const s=e=>r(e,d),b={module:{uri:d},exports:o,require:s};a[d]=Promise.all(i.map((e=>b[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b00281218637e03225ebdca03e7d9411"},{url:"announcement/",revision:"0702a819f0271e872ddd36c2e9ff7ed3"},{url:"archives/2022/01/",revision:"e873629f2af8cfca2261daaa5b4bb10f"},{url:"archives/2022/02/",revision:"b4747042acdf23388debb36bf1e62bd4"},{url:"archives/2022/02/page/2/",revision:"d0c2069448eabb177735cce0f13d323f"},{url:"archives/2022/02/page/3/",revision:"9dd3cc810b16e0a0198edda1f1a60333"},{url:"archives/2022/03/",revision:"9947b631df5b0e29b0b4fa2dfc3b70f8"},{url:"archives/2022/04/",revision:"a95a6ae3e7a587adfddd7ba614120726"},{url:"archives/2022/05/",revision:"1f4fac144fe3baa31cbc85be70a8f943"},{url:"archives/2022/07/",revision:"d29b3f5d771afe613c7593ac6bb16542"},{url:"archives/2022/08/",revision:"88a59b3feac452700cb16e6d95eccad5"},{url:"archives/2022/",revision:"709414c2aadd431447c78d18dec78273"},{url:"archives/2022/page/2/",revision:"64341f3057eaecb3ecb643730a1f4e50"},{url:"archives/2022/page/3/",revision:"bb4d823be002036d11837ee0c17a0bb0"},{url:"archives/2022/page/4/",revision:"d5cc0709761d6b655d63eb4322dd5f57"},{url:"archives/2022/page/5/",revision:"fe6cd388d6103aa11e43d3aa496d8206"},{url:"archives/",revision:"b055a2a294b15f5bc69266f357b3fdbc"},{url:"archives/page/2/",revision:"05a579174e3e5bbbdc622999921ea3b5"},{url:"archives/page/3/",revision:"044c71c73bfe6e83bb7a53cc83b61488"},{url:"archives/page/4/",revision:"b579caeea1b07bf2d3183310b7fa35bd"},{url:"archives/page/5/",revision:"f38cf453f1e186950843a46ad95cef3b"},{url:"backstage/",revision:"4d0e352ada203f58438d0d61ec2a77e1"},{url:"bangumis/",revision:"386137d62391289745fcabd792e187de"},{url:"categories/HEXO/",revision:"11361e6138c4816f6071d71802e01e36"},{url:"categories/",revision:"40d5e58eb11f40444b032853c3c7eb88"},{url:"categories/LeetCode/",revision:"e8c37606bfe7094b46914e5120f55a06"},{url:"categories/ZeroJudge/",revision:"4631dbbaf8677bed9cdcd020a126b60f"},{url:"categories/ZeroJudge/page/2/",revision:"43dcc46c7c04b60805dc1049fa265f9a"},{url:"categories/ZeroJudge/page/3/",revision:"e7d64cf29e8ac7afc99567ef8033db2b"},{url:"categories/ZeroJudge/page/4/",revision:"2015aa29f7a1240f719442bb7bf7c730"},{url:"categories/宿舍活動/",revision:"2388715a80291bc7d606c69e2aec8e2c"},{url:"categories/工具/",revision:"6a4f6c8e0857c97fe759ee6c31a35712"},{url:"categories/練習題/",revision:"8065bca11a5e532e1aa64a3e1e6d1377"},{url:"categories/遊戲/",revision:"6fc59e64182683da18f26cb4157aec3b"},{url:"categories/鍵盤/",revision:"ff4676d04c3113afe165721c817ab85a"},{url:"comments/",revision:"e751cf607af478f7983150866e21a8a8"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"5b2e53a0a4e1bbb3546c69b90ed1a635"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"a7f974f3ee984ef2774123a1bf242f81"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"bc906002c0e5653de054c9f76084e355"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"1d0f500e1b3ba8c9b0e082da144b120e"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"32d6474d8a7058896a9fd9acefc9bb52"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/custom/sun_moon.js",revision:"311cc8a0a9f3a9c27a2cb1a048a19c9b"},{url:"js/custom/universe.js",revision:"df3e74f701dfc1379342871273c8c014"},{url:"js/custom/wow_init.js",revision:"63bfe63fafe66b52f51b7add85f86447"},{url:"js/main.js",revision:"de5813861b605845f248f19d7653f6ba"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"8b6f4fe6861730f883c0359cbd6a463e"},{url:"page/2/",revision:"e410068abe9ccfb1e8b86c2091f48299"},{url:"page/3/",revision:"a973d2a420cafcc1d7989e8f6dd00b55"},{url:"page/4/",revision:"4bc407b093d8fe65208598148b9cb538"},{url:"page/5/",revision:"da2400b7d40819acb4d68e7aec0a50eb"},{url:"post/cover/",revision:"035db26eb393420e84bc6b055bdfdbb8"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"92adcb24b85d14ad2b71e8fc64aff1c4"},{url:"post/minecraft-java/",revision:"a276a8ebc4f2426e1933d46607af4c51"},{url:"post/oj/leetcode/1. Two Sum/",revision:"7647e13ca0411bea59b19bf135fb5c08"},{url:"post/oj/zerojudge/a001/",revision:"4a9e20cc1de88fdf7d11142dd9fc7d9f"},{url:"post/oj/zerojudge/a002/",revision:"1d7813935ae73c47d51cdcd29f6e8c3c"},{url:"post/oj/zerojudge/a003/",revision:"b1084d613774b485419972dff0f8d46f"},{url:"post/oj/zerojudge/a004/",revision:"e360230c1dea9971c32943105c6c5308"},{url:"post/oj/zerojudge/a005/",revision:"541df1601fbf3f88dc593f245e93f9ac"},{url:"post/oj/zerojudge/a006/",revision:"b2488de7c47301558ed2d93f080cdb58"},{url:"post/oj/zerojudge/a009/",revision:"4e6f382b46a8527d730b82d61231c431"},{url:"post/oj/zerojudge/a010/",revision:"3b496e448eb66932b5a0a922cabd0e9f"},{url:"post/oj/zerojudge/a015/",revision:"443e526290ffa028ee1e31e4b23102da"},{url:"post/oj/zerojudge/a017/",revision:"3e079338d588f86853e3f10d14edba31"},{url:"post/oj/zerojudge/a020/",revision:"a914ac4e176b1f2c82eb37514f0b671f"},{url:"post/oj/zerojudge/a021/",revision:"f2f6d9c70837008ddd2b622f35d480b3"},{url:"post/oj/zerojudge/a022/",revision:"546af8f29b103f473c47060fff39eff6"},{url:"post/oj/zerojudge/a024/",revision:"6fecf008c988794d09ff80c61fc17582"},{url:"post/oj/zerojudge/a034/",revision:"f6abeefb32398ca504d7936a63539bbd"},{url:"post/oj/zerojudge/a038/",revision:"a6612de79d82429c3428256e1db07d60"},{url:"post/oj/zerojudge/a053/",revision:"43668cc97ee36b778549d210e8434fbd"},{url:"post/oj/zerojudge/a058/",revision:"62b2b1e706372510588d773ee9b5c478"},{url:"post/oj/zerojudge/a059/",revision:"05f90172ddf5ba7b173c199e39b6d211"},{url:"post/oj/zerojudge/a065/",revision:"78a24f3036b8fa98f2221fdc012e405b"},{url:"post/oj/zerojudge/a104/",revision:"967cd91c9d048f2f0dcf5582994c2536"},{url:"post/oj/zerojudge/a147/",revision:"f3577afe6b7dcc4a919acc9c510ecceb"},{url:"post/oj/zerojudge/a148/",revision:"7ae8a07304444cb54ea044874596ee38"},{url:"post/oj/zerojudge/a149/",revision:"694f7ee3fe4cf98593391c35d4b9ff4a"},{url:"post/oj/zerojudge/a215/",revision:"62668fd03ae0d4264ec4e8d6d7f88759"},{url:"post/oj/zerojudge/a244/",revision:"612098ba7cad5ee2ec186a9645b2d35a"},{url:"post/oj/zerojudge/a263/",revision:"3d42ab1959fe0f8a43b7cf1dfbbfd780"},{url:"post/oj/zerojudge/a528/",revision:"69f911c063f2d74a9feda5d893bc35f7"},{url:"post/oj/zerojudge/a738/",revision:"a22cf5007f994581bc7c88176fa013df"},{url:"post/oj/zerojudge/a799/",revision:"d180ad6600b60310fecb1278d015a191"},{url:"post/oj/zerojudge/a915/",revision:"abaad66dc59744dddde3139198b329ef"},{url:"post/oj/zerojudge/b294/",revision:"57572004822ad748cdf218190469242b"},{url:"post/oj/zerojudge/b558/",revision:"ee14040ea93a2cb506e47d285f9098ae"},{url:"post/oj/zerojudge/b572/",revision:"9dbba924b3076e1ef23dd54e95db5208"},{url:"post/oj/zerojudge/b758/",revision:"601fbb80641fc0fe28e3eccfcf24e070"},{url:"post/oj/zerojudge/b759/",revision:"c5afc79a0ec8d17f12d4cabeb9cd5f3e"},{url:"post/oj/zerojudge/d086/",revision:"28cf3d931ee293e26a40b72abbf27200"},{url:"post/oj/zerojudge/d098/",revision:"e79570cb79341fbf1a9b45e527d76fce"},{url:"post/pixiv/",revision:"055e95e5b6b0385d43943786ad280e21"},{url:"post/practice/week-01/",revision:"08d7eef5b9b6511469a54d35a2e0dcc0"},{url:"post/takming-dormitory-about/",revision:"d3158e88552ebc52f56c140068bb645a"},{url:"post/tool/word-mdeditor/",revision:"e0ef1b74ca50e694a3c143eb98bc34fd"},{url:"Privacy-Policy/",revision:"9d9d7fadb48d595d40a1b6c96f6c9f52"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"8d633948041d6bc116e3d0676ca84b38"},{url:"tags/C/",revision:"bb6a744a1040b853671bca8955b5d737"},{url:"tags/HEXO/",revision:"c8a0f5899212efb94d5a3fc8e3b5721b"},{url:"tags/",revision:"8e60726c77ded0b48d3c2b0aa78e2b2a"},{url:"tags/JAVA版/",revision:"180773b4bf28500e6c79715dfc2663fc"},{url:"tags/LeetCode/",revision:"208275ea3cdbf2e46fdf4758b2e8b376"},{url:"tags/Minecraft/",revision:"154f27d85d807d20296481d3be75c407"},{url:"tags/Python/",revision:"19c25a143b4d587bd65f1f3664f9aaa1"},{url:"tags/Python/page/2/",revision:"1eb52255be720ea9e177e706fb2d9230"},{url:"tags/Python/page/3/",revision:"1b572f8be9b3c9eb0a9af091e65610a0"},{url:"tags/Python/page/4/",revision:"c8ef83e8bb1155319d90388b255528fc"},{url:"tags/ZeroJudge/",revision:"f3864529b669bc9606c2ad0c1befdc1b"},{url:"tags/ZeroJudge/page/2/",revision:"5f57200984aade95309428565e3edc64"},{url:"tags/ZeroJudge/page/3/",revision:"a1dba06f2ce769a5c703942b4311d65a"},{url:"tags/ZeroJudge/page/4/",revision:"1db4904c3cac9064b01140d5eb9cdf12"},{url:"tags/機械式鍵盤/",revision:"2b0daac8df9999375d47ff26b192b18a"},{url:"tags/解題答案/",revision:"382ab76680de8001f080ec8ce9300e96"},{url:"tags/解題答案/page/2/",revision:"1a7bc010bfec498a819734932624260a"},{url:"tags/解題答案/page/3/",revision:"caab0ff77a77d94a8780f764e0cb4d00"},{url:"tags/解題答案/page/4/",revision:"f518eed15796b485769530982d065fa5"},{url:"timeline/",revision:"f31ed09295f6ec0357c8be9c9a818df5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));