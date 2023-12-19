import{_ as n,o as s,c as a,a as l}from"./app.2a154df8.js";const h=JSON.parse('{"title":"Node","description":"","frontmatter":{},"headers":[{"level":2,"title":"nvm","slug":"nvm"},{"level":2,"title":"error","slug":"error"},{"level":2,"title":"npm","slug":"npm"}],"relativePath":"src/deploy/node\u90E8\u7F72.md","lastUpdated":1697533563000}'),e={name:"src/deploy/node\u90E8\u7F72.md"},p=l(`<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h1><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-hidden="true">#</a></h2><ul><li>\u53C2\u8003</li></ul><blockquote><p><a href="https://blog.csdn.net/weixin_44348138/article/details/104229522" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_44348138/article/details/104229522</a></p></blockquote><ul><li>nvm install</li></ul><blockquote><p><a href="https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7" target="_blank" rel="noopener noreferrer">https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7</a></p></blockquote><ol><li>nvm-setup.zip\uFF1A\u5B89\u88C5\u5305\uFF0C\u4E0B\u8F7D\u4E4B\u540E\u70B9\u51FB\u5B89\u88C5\uFF0C\u65E0\u9700\u914D\u7F6E\u5C31\u53EF\u4EE5\u4F7F\u7528</li><li>\u89E3\u538B\u540E\uFF0C\u53CC\u51FBnvm-setup.exe</li><li>\u5B89\u88C5\u76EE\u5F55\u4E0D\u53EF\u6709\u4E2D\u6587\uFF0C\u4E00\u76F4\u4E0B\u4E00\u6B65</li><li>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u8F93\u5165 nvm \u67E5\u770B\u7248\u672C</li><li>\u5B89\u88C5\u5B8Cnvm\u540E\u8BB0\u5F97\u6CE8\u9500\u6216\u91CD\u542F\u7535\u8111</li><li>\u91CD\u542F\u540E\uFF0C\u4FEE\u6539settings.txt\uFF0C\u8FFD\u52A0\u5373\u53EF</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#c9d1d9;">npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ol start="7"><li>\u8BBE\u7F6Envm\u7684\u73AF\u5883\u53D8\u91CF</li><li>NVM_HOME D:\\Space\\space-kit\\node\\nvm</li><li>\u5982\u679C\u7535\u8111\u4E2D\u5DF2\u6709node\u6587\u4EF6\u5939\u6216node\u7248\u672C\uFF0C\u5E94\u5F53\u5148\u5220\u9664\u6216\u5378\u8F7D\uFF0C\u4E0D\u7136\u4F1A\u5F71\u54CDnvm\u5B89\u88C5node\u7248\u672C\u540E\u7684\u7248\u672C\u5207\u6362\uFF0Cnvm\u4E3B\u8981\u662F\u4F9D\u9760\u4E0B\u8F7Dnode\u5FEB\u6377\u76EE\u5F55\uFF0C\u5982\u679C\u5F53\u524D\u7535\u8111\u5B58\u5728node\u7248\u672C\u6216node\u6587\u4EF6\u5939\uFF0C\u5C31\u4F1A\u51FA\u73B0node\u7248\u672C\u5207\u6362\u4E0D\u6210\u529F \u4EE5\u4E0A\u6240\u6709\u6B65\u9AA4\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C <strong>\u4E00\u5B9A\u8981\u6CE8\u9500\u6216\u91CD\u542F\u7535\u8111\uFF0C\u4E00\u5B9A\u8981\u6CE8\u9500\u6216\u91CD\u542F\u7535\u8111\uFF0C\u4E00\u5B9A\u8981\u6CE8\u9500\u6216\u91CD\u542F\u7535\u8111</strong></li></ol><ul><li>nvm \u547D\u4EE4\u6C47\u603B</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#8B949E;">#nvm uninstall \u7248\u672C\u53F7\uFF1A\u5378\u8F7D\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#8B949E;">#nvm list\uFF1A\u67E5\u770B\u76EE\u524D\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C</span></span>
<span class="line"><span style="color:#8B949E;">#nvm list available\uFF1A\u663E\u793A\u53EF\u4E0B\u8F7D\u7684node\u7248\u672C\u90E8\u5206\u5217\u8868</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u4E0B\u8F7D\u5F53\u524D\u6307\u5B9A\u5207\u6362\u7684node\u7248\u672C</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm install v12.8.0</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm install v16.8.0</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm install v18.8.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u76EE\u524D\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362\u4F7F\u7528\u6307\u5B9Anode\u7248\u672C</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm use v12.8.0</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm use v16.8.0</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm use v18.8.0</span></span>
<span class="line"></span></code></pre></div><blockquote><p>nvm \u5378\u8F7D</p></blockquote><p><a href="https://blog.csdn.net/weixin_39786582/article/details/128669914" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_39786582/article/details/128669914</a></p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5378\u8F7D\u6240\u6709 node \u7248\u672C nvm uninstall [version]</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm uninstall 18.8.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u627E\u5230 nvm \u5B89\u88C5\u4F4D\u7F6E\uFF0C \u5378\u8F7D nvm , \u53CC\u51FB nvm \u76EE\u5F55\u4E2D\u7684 unins000.exe \u8FDB\u884C\u5378\u8F7D</span></span>
<span class="line"><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">https://github.com/coreybutler/nvm-windows/releases</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9009\u62E9\u4E0B\u8F7D nvm-setup.exe \uFF0C\u53CC\u51FB\u4E00\u76F4\u4E0B\u4E00\u6B65\uFF0C\u5B89\u88C5\u6700\u65B0\u7248\u672C nvm\u3002</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5B89\u88C5 node</span></span>
<span class="line"><span style="color:#C9D1D9;">nvm install 18.13.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">nvm use 18.13.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">npm install</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">error</p><ul><li>\u5982\u679C\u4F7F\u7528nvm install 8.10.0\u5B89\u88C5\u8001\u7248\u672C\u53EF\u80FD\u4F1A\u63D0\u793A\u4E0B\u9762\u9519\u8BEF\uFF1A</li><li>Node.js v8.10.0 is not yet released or available.</li></ul></div><blockquote><p>\u79BB\u7EBF\u4E0B\u8F7D node</p></blockquote><ul><li><a href="https://mirrors.cloud.tencent.com/nodejs-release/v18.13.0/" target="_blank" rel="noopener noreferrer">https://mirrors.cloud.tencent.com/nodejs-release/v18.13.0/</a></li><li>\u9009\u62E9 node-v18.13.0-win-x64.zip</li><li>\u89E3\u538B\u81F3\u5F53\u524D\u6587\u4EF6\u5939\uFF0C\u91CD\u547D\u540D\u4E3A v18.13.0</li><li>\u5C06 v18.13.0 \uFF0C\u653E\u5230 nvm \u5B89\u88C5\u76EE\u5F55\u4E0B C:\\Users\\zhang\\AppData\\Roaming\\nvm</li><li>\u6267\u884C\u547D\u4EE4</li><li>nvm list</li><li>nvm use 18.13.0</li></ul><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5B89\u88C5\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">npm install jquery --registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u914D\u7F6E</span></span>
<span class="line"><span style="color:#C9D1D9;">npm config </span><span style="color:#79C0FF;">set</span><span style="color:#C9D1D9;"> registry https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">npm config list</span></span>
<span class="line"></span></code></pre></div>`,20),o=[p];function t(i,r,c,d,m,v){return s(),a("div",null,o)}var y=n(e,[["render",t]]);export{h as __pageData,y as default};
