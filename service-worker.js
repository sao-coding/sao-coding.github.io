if(!self.define){let e,a={};const r=(r,c)=>(r=new URL(r+".js",c).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const s=e=>r(e,o),f={module:{uri:o},exports:d,require:s};a[o]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"23212e42bb7892d0ce25fdc498d91d1f"},{url:"announcement/",revision:"509ed6849f808d0de1254e7122a3b1df"},{url:"archives/2022/01/",revision:"fb234f5d34dc90124cdafd7bc64bda7a"},{url:"archives/2022/02/",revision:"beba215220179bebf357ddae00ca8984"},{url:"archives/2022/02/page/2/",revision:"e48464a05868c128051368bada1e9615"},{url:"archives/2022/02/page/3/",revision:"33e49b8cf3c7832c11243a266f6ecde9"},{url:"archives/2022/03/",revision:"2c6d268a0d5b03ca30c3d0d6f083fc84"},{url:"archives/2022/04/",revision:"47e0a1a742d4705098d182ba04d5e80d"},{url:"archives/2022/05/",revision:"fe7c8e645a035a0956518868f3e68907"},{url:"archives/2022/07/",revision:"300e5cd8859c44a09ec5be2158c58d82"},{url:"archives/2022/08/",revision:"29e7054e1d69c8b4f3ca82bc86d5eff0"},{url:"archives/2022/",revision:"93faa93eb86293233a81089e6f7e6046"},{url:"archives/2022/page/2/",revision:"7940a710db26540e2cde6c55b8e9be2f"},{url:"archives/2022/page/3/",revision:"1c2e6174385cf1c5131cb8fc8447180d"},{url:"archives/2022/page/4/",revision:"5779931e65e3adc686ac5054a99c3771"},{url:"archives/2022/page/5/",revision:"466688f0a9cc2e2231ca1ee3630fec03"},{url:"archives/",revision:"996373e742968a220f21375219820627"},{url:"archives/page/2/",revision:"3ba8059b6582d90f0d331e49334e41db"},{url:"archives/page/3/",revision:"bef5530b8fa4340a31899a810b9bcddf"},{url:"archives/page/4/",revision:"23b743d1b6e8ea5248528365eef34ac0"},{url:"archives/page/5/",revision:"6bed6aafea6cca266b3c463f0e2f5646"},{url:"backstage/",revision:"10eee9c48902230af2ab3000efa78994"},{url:"bangumis/",revision:"8c4c20eb955107c5c1693aadb0c83ebf"},{url:"categories/HEXO/",revision:"85a5a1a2e35041fabe5c2571eb4c295a"},{url:"categories/",revision:"3259278e3618964589e74f14bf273ad7"},{url:"categories/LeetCode/",revision:"c3dd8325ae56a1fcbc9b432f4c051c78"},{url:"categories/ZeroJudge/",revision:"48df2ea4d7246240be4939bfdbe20a10"},{url:"categories/ZeroJudge/page/2/",revision:"ede6809138e2fcc12885f15fb75041c5"},{url:"categories/ZeroJudge/page/3/",revision:"fff9eebf406562cbacc3774f056e79b0"},{url:"categories/ZeroJudge/page/4/",revision:"73fc5db08fba6f2f3ea1eb5d5e14e92b"},{url:"categories/宿舍活動/",revision:"0e6e3986c2873ed5067299f9a8d8ba97"},{url:"categories/工具/",revision:"167968709da7e471a62234bcf6e7eae7"},{url:"categories/練習題/",revision:"7c7463ee06208a76488ea0d5ca6a0eaa"},{url:"categories/遊戲/",revision:"8c2c57112b1a2d43345c84ec80e89b16"},{url:"categories/鍵盤/",revision:"2fac0ed4747bfe8854c394daa7119b01"},{url:"comments/",revision:"e0dc4bedf100a5c2ce8c648afbe3b3de"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"5bf7eb2f9a13c4828136b6da234e4f81"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/",revision:"e8f3e97faa3ca4a2ca564cbf118e9c6a"},{url:"fonts/SAOUI.ttf",revision:"c4b0afc9f7f1ef7cf5824818a060d580"},{url:"fonts/筑紫A丸by 宁静之雨.woff2",revision:"62c1387e64c98603f856f9d3fa5757c2"},{url:"hpptalk/",revision:"46be0d40c005b6feed298bb650e60bde"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/app.png",revision:"d1dc0e63bd067e263e8c6c617c13ea93"},{url:"img/avatar.jpg",revision:"4170c577689aa9aa475d35d7cd167024"},{url:"img/cat.png",revision:"e65d9339708c2c11103f4b9ab214179e"},{url:"img/cover.jpg",revision:"2bec8e6a3cb69988f34a2cc453555b59"},{url:"img/favicon.png",revision:"7d837bda9d8d5dd936aa946159e94c7a"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexo.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/index.webp",revision:"ae32e7ed43ede769133ae6b4d1c5a279"},{url:"img/mail.png",revision:"14fa675dfc9c09ba6544cee7c2cd899b"},{url:"/",revision:"4f6b8364ffd66eca91917a89b0a91226"},{url:"js/custom/calendar.js",revision:"48bec913bdd35266de9e1e4e3805c754"},{url:"js/custom/hpptalk.js",revision:"b37d68ce076616a9181d224b7e3d1da5"},{url:"js/custom/languages.js",revision:"538b160f8ccb8f13c5b1dd467dfd847c"},{url:"js/custom/rightMenu.js",revision:"470e7fe9b13dc17142e74d55e9cf1a7e"},{url:"js/custom/SAO-Notify.js",revision:"bc191d6cc0277b03742a99b737777964"},{url:"js/custom/sao.js",revision:"c476dd0f9cf35fe239ccc5e59223233e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"e6e012ab336d9c1051cf6b37ce9dd4e2"},{url:"js/search/local-search.js",revision:"75362011f03733ec767357b59f19ced1"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/",revision:"69a21825776098551afbe4431d0fa512"},{url:"page/2/",revision:"60f431d8df33dafb962aff98f7fd69a5"},{url:"page/3/",revision:"846a446c8bfd404cf8f533c1455a745d"},{url:"page/4/",revision:"04795b5d47d5f83a0def1b1815425372"},{url:"page/5/",revision:"f960a5a455044f56568b8be0a058bfdd"},{url:"post/cover/",revision:"12fd48fd87e3df0262886be52fd23632"},{url:"post/keyboard/keychron-k4v2-keyboard/",revision:"b5e990449665db6986dc2884fa7476c1"},{url:"post/minecraft-java/",revision:"582f510c54720129c44e49afb08f16b9"},{url:"post/oj/leetcode/1. Two Sum/",revision:"e614f8d427e2ed6ff82a24fa9fbb61b9"},{url:"post/oj/zerojudge/a001/",revision:"1dd3555ff9354076333be65359d3e81c"},{url:"post/oj/zerojudge/a002/",revision:"eb8a9c2f6e0f57e1649e1766732151f9"},{url:"post/oj/zerojudge/a003/",revision:"dc12a1031a5a23e24334188232fcc2a7"},{url:"post/oj/zerojudge/a004/",revision:"5eadb779ca5d234c606075c6bdaeca14"},{url:"post/oj/zerojudge/a005/",revision:"6678c5de3c9fe01e02c6538d93686ed2"},{url:"post/oj/zerojudge/a006/",revision:"e8cb8d728f44dd96aaa93960e083ac06"},{url:"post/oj/zerojudge/a009/",revision:"69ed283fb1c9f864556d0c045ecc0dd4"},{url:"post/oj/zerojudge/a010/",revision:"c338027d9e11a634a7acf3edd883a7dd"},{url:"post/oj/zerojudge/a015/",revision:"cb3e30e1f58304209d3c0430fba629ce"},{url:"post/oj/zerojudge/a017/",revision:"0aef4a9632e7e5709b44a82462b80917"},{url:"post/oj/zerojudge/a020/",revision:"05996ee16244c26721d075e20ad7309a"},{url:"post/oj/zerojudge/a021/",revision:"725d423dbb0655c4f2226c858e18de12"},{url:"post/oj/zerojudge/a022/",revision:"2700c29f8283e74ff00ed9216a74802b"},{url:"post/oj/zerojudge/a024/",revision:"cc2945cd7d8d5708edea038e59f99a98"},{url:"post/oj/zerojudge/a034/",revision:"9f2c10464901c10f286e3379913ad423"},{url:"post/oj/zerojudge/a038/",revision:"0af22216df2b93cffa81ce0d7a9f597a"},{url:"post/oj/zerojudge/a053/",revision:"efff20c4ed7a0b19a1d62b69199daa49"},{url:"post/oj/zerojudge/a058/",revision:"98334f5eb20914ed3790cf244940e25c"},{url:"post/oj/zerojudge/a059/",revision:"152265f9cea2455b94183a9768c8f033"},{url:"post/oj/zerojudge/a065/",revision:"8ea4eb67bd866cf2f34787ce0daf8966"},{url:"post/oj/zerojudge/a104/",revision:"7b9ac25c493f9bd0072f19242793d774"},{url:"post/oj/zerojudge/a147/",revision:"88256646863f154852b7e4de4f0e561b"},{url:"post/oj/zerojudge/a148/",revision:"539db072f99705b9c1c9e2134a35cdc6"},{url:"post/oj/zerojudge/a149/",revision:"3027e22cb1932e7adc95217fd473c35b"},{url:"post/oj/zerojudge/a215/",revision:"272c399551c09d350c07c84dadc6aeab"},{url:"post/oj/zerojudge/a244/",revision:"fdee06413a04a421078a8f33261a3399"},{url:"post/oj/zerojudge/a263/",revision:"f9d06c008c91cab23cde1bc9aecbb9ca"},{url:"post/oj/zerojudge/a528/",revision:"e9413b11ee7e7dbbea823d9e75c33e10"},{url:"post/oj/zerojudge/a738/",revision:"6c9fa62c97cb1966d42d074165901a22"},{url:"post/oj/zerojudge/a799/",revision:"65e024a769d9f899d1ba2d5949324a3b"},{url:"post/oj/zerojudge/a915/",revision:"0eb4848caeb978e18b6361e970c14bbc"},{url:"post/oj/zerojudge/b294/",revision:"566bb0eadb96fb0173125623a03ecff6"},{url:"post/oj/zerojudge/b558/",revision:"a4a2af900b6e2d49f758d06945139539"},{url:"post/oj/zerojudge/b572/",revision:"00d88aab1891310381c01c4f6ada055f"},{url:"post/oj/zerojudge/b758/",revision:"9112416460bca58ff09110955d160799"},{url:"post/oj/zerojudge/b759/",revision:"998efa8834a69bf93b22d8f44c34d21a"},{url:"post/oj/zerojudge/d086/",revision:"364b94dd0693cd3a2288a57b9afb25f2"},{url:"post/oj/zerojudge/d098/",revision:"f5529b0c746bc0c06ed5aab404cc51c3"},{url:"post/pixiv/",revision:"d13ab48c337c969cce82e78160e0dbb6"},{url:"post/practice/week-01/",revision:"f82c10d3e4d429b582846b112186469d"},{url:"post/takming-dormitory-about/",revision:"9d14c1df688d3c581019db454355c5b0"},{url:"post/tool/word-mdeditor/",revision:"7764adb3a7f165195947eaa3c6f0346b"},{url:"Privacy-Policy/",revision:"76d589760c97e3101d890403ddd30c8e"},{url:"pwa/16.png",revision:"871e1cb9bb3ca9be3d554ad19c44fec6"},{url:"pwa/32.png",revision:"37aa498ff72bb6ba3b4fa657de9d61b8"},{url:"pwa/apple-touch-icon.png",revision:"6805dc57323a7b898b3ca98aa54f79c7"},{url:"pwa/icon-128x128.png",revision:"6eca034a3b3c9fc8cc1731aaab45651f"},{url:"pwa/icon-192x192.png",revision:"037d5841b9e3850c825165df5e0c399c"},{url:"pwa/icon-256x256.png",revision:"645e8eabb7d108c36ee7fbf7ea000436"},{url:"pwa/icon-384x384.png",revision:"e9e8d842f2cb36d6772933441b80a7c1"},{url:"pwa/icon-512x512.png",revision:"640c46c7202ba98bbef28ca07b272b68"},{url:"pwa/safari-pinned-tab.svg",revision:"0ccb1543abe1e690d1eee0dfda591566"},{url:"random/",revision:"c89def5000205e0e98d3c222c72d5ff3"},{url:"tags/🦋-Butterfly/",revision:"758f83428dbbd4d83c9166c62e2b66ca"},{url:"tags/C/",revision:"de4777aef0d7796c83f5deb3416761ef"},{url:"tags/HEXO/",revision:"a646fc2b43d581e1b5a5b3f6c8e87ce6"},{url:"tags/",revision:"5fa218e8af05c5e9e4824a56f723b2be"},{url:"tags/JAVA版/",revision:"bcd20cd93ede4108ab0fd4f7fdfc03a5"},{url:"tags/LeetCode/",revision:"acae1347b862bd286632fc96e88e395b"},{url:"tags/Minecraft/",revision:"3309baa25db86d21832fb9396c0beaef"},{url:"tags/Python/",revision:"49b4457120e029f18719a3b3be743c58"},{url:"tags/Python/page/2/",revision:"9e040f0b187af529e34d2ec6e7ab5f68"},{url:"tags/Python/page/3/",revision:"20c52ba4320922bfae7145796ccb23b1"},{url:"tags/Python/page/4/",revision:"ed45f842416cb6fac6f24b6315498428"},{url:"tags/ZeroJudge/",revision:"ca4ae3d9c05cb6e4cf691a9420f2ad9f"},{url:"tags/ZeroJudge/page/2/",revision:"d93863e33c152109ba7138343a3dd607"},{url:"tags/ZeroJudge/page/3/",revision:"a79846ca989ad0a072b0c0e0c66874be"},{url:"tags/ZeroJudge/page/4/",revision:"0ea6a686d712c771f0efa50ce18be8e1"},{url:"tags/機械式鍵盤/",revision:"58a033c7ecf13eae3a28373f32ad5477"},{url:"tags/解題答案/",revision:"abbb8d31090eaabf95c5aad2ab500cde"},{url:"tags/解題答案/page/2/",revision:"dd07c5146d8c5a56be406485f2695c5d"},{url:"tags/解題答案/page/3/",revision:"1c5318c7a9368380dfc429e232e3c72e"},{url:"tags/解題答案/page/4/",revision:"c023a048ca133414bf9bae33ae5945f7"},{url:"timeline/",revision:"8b19c88f9a495058ad2007b5b7caf0e4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));