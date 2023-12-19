import{_ as s,o as a,c as n,a as e}from"./app.2a154df8.js";const _=JSON.parse('{"title":"Vite \u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u542F\u52A8\u672C\u5730\u670D\u52A1","slug":"\u542F\u52A8\u672C\u5730\u670D\u52A1"},{"level":2,"title":"\u8BBF\u95EE\u672C\u5730\u670D\u52A1","slug":"\u8BBF\u95EE\u672C\u5730\u670D\u52A1"}],"relativePath":"src/web/vitepress/VitePress\u5FEB\u901F\u5F00\u59CB.md","lastUpdated":1697533563000}'),p={name:"src/web/vitepress/VitePress\u5FEB\u901F\u5F00\u59CB.md"},l=e(`<h1 id="vite-\u5FEB\u901F\u5F00\u59CB" tabindex="-1">Vite \u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#vite-\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><blockquote><p>\u5F53\u524D\u4F7F\u7528<code>pnpm</code>\u65B9\u5F0F\uFF0C\u4F7F\u7528<code>yarn</code>\uFF0C<code>npm</code>\u90FD\u662F\u53EF\u4EE5\u7684\u3002</p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u65B0\u5EFA\u76EE\u5F55chapter-vitepress\uFF08\u5747\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u64CD\u4F5C\uFF09</span></span>
<span class="line"><span style="color:#8B949E;"># \u5B89\u88C5pnpm</span></span>
<span class="line"><span style="color:#C9D1D9;">npm i pnpm -g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9879\u76EE\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#C9D1D9;">pnpm init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5B89\u88C5vitepress</span></span>
<span class="line"><span style="color:#C9D1D9;">pnpm i vitepress</span></span>
<span class="line"></span></code></pre></div><ul><li><code>package.json</code>\u6DFB\u52A0<code>scripts</code></li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#c9d1d9;">    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#c9d1d9;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">.</span></span>
<span class="line"><span style="color:#c9d1d9;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#c9d1d9;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ul><li><code>config.js</code>\u5BFC\u51FA\u4E00\u4E2A<code>js\u5BF9\u8C61</code></li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">title: </span><span style="color:#A5D6FF;">&#39;in&#39;</span><span style="color:#FFA657;">, </span><span style="color:#8B949E;">//\u7AD9\u70B9\u6807\u9898</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">description: </span><span style="color:#A5D6FF;">&#39;\u4E00\u4E2Avue3\u7EC4\u4EF6\u5E93&#39;</span></span>
<span class="line"><span style="color:#FFA657;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u542F\u52A8\u672C\u5730\u670D\u52A1" tabindex="-1">\u542F\u52A8\u672C\u5730\u670D\u52A1 <a class="header-anchor" href="#\u542F\u52A8\u672C\u5730\u670D\u52A1" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">pnpm run docs:dev</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BBF\u95EE\u672C\u5730\u670D\u52A1" tabindex="-1">\u8BBF\u95EE\u672C\u5730\u670D\u52A1 <a class="header-anchor" href="#\u8BBF\u95EE\u672C\u5730\u670D\u52A1" aria-hidden="true">#</a></h2><blockquote><p>\u9ED8\u8BA4\u52A0\u8F7D<code>docs/index.md</code></p></blockquote><p><a href="http://127.0.0.1:3000/" target="_blank" rel="noopener noreferrer">http://127.0.0.1:3000/</a></p>`,14),c=[l];function o(t,d,r,i,u,y){return a(),n("div",null,c)}var h=s(p,[["render",o]]);export{_ as __pageData,h as default};
