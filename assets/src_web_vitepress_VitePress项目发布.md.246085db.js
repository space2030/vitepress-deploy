import{_ as s,o as n,c as a,a as l}from"./app.2a154df8.js";const x=JSON.parse('{"title":"VitePress\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"nginx install","slug":"nginx-install"},{"level":2,"title":"nginx conf","slug":"nginx-conf"},{"level":2,"title":"nginx reload","slug":"nginx-reload"},{"level":2,"title":"\u6253\u5305","slug":"\u6253\u5305"},{"level":2,"title":"\u4E0A\u4F20","slug":"\u4E0A\u4F20"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"src/web/vitepress/VitePress\u9879\u76EE\u53D1\u5E03.md","lastUpdated":1697533563000}'),e={name:"src/web/vitepress/VitePress\u9879\u76EE\u53D1\u5E03.md"},p=l(`<h1 id="vitepress\u90E8\u7F72" tabindex="-1">VitePress\u90E8\u7F72 <a class="header-anchor" href="#vitepress\u90E8\u7F72" aria-hidden="true">#</a></h1><blockquote><p>\u963F\u91CC\u4E91\u670D\u52A1\u5668</p></blockquote><h2 id="nginx-install" tabindex="-1">nginx install <a class="header-anchor" href="#nginx-install" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5B89\u88C5</span></span>
<span class="line"><span style="color:#C9D1D9;">yum install nginx</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># \u5B89\u88C5\u662F\u5426\u6210\u529F</span></span>
<span class="line"><span style="color:#C9D1D9;">nginx -t</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># \u542F\u52A8nginx</span></span>
<span class="line"><span style="color:#C9D1D9;">nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span style="color:#8B949E;"># /etc/nginx/nginx.conf \u4E3A\u9ED8\u8BA4\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx-conf" tabindex="-1">nginx conf <a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u5728\u547D\u4EE4\u884C\u8F93\u5165\u547D\u4EE4 cd /etc/nginx \u5207\u6362\u5230nginx\u76EE\u5F55\u4E0B\uFF0C</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> /etc/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u518D\u8F93\u5165 cat nginx.conf \u53EF\u67E5\u770B\u5F53\u524Dnginx\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#C9D1D9;">cat nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u5728nginx\u76EE\u5F55\u4E0B\uFF0C\u8F93\u5165 vim nginx.conf \u8FDB\u5165nginx\u914D\u7F6E\u7F16\u8F91\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">vim nginx.conf</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6DFB\u52A0\u9AD8\u4EAE\u90E8\u5206\u7684\u914D\u7F6E</li></ul><div class="language-text"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">server {</span></span>
<span class="line"><span style="color:#c9d1d9;">        listen       8080;</span></span>
<span class="line"><span style="color:#c9d1d9;">        listen       [::]:8080;</span></span>
<span class="line"><span style="color:#c9d1d9;">#        server_name  www.space2030.space;</span></span>
<span class="line"><span style="color:#c9d1d9;">        server_name 123.56.238.131;</span></span>
<span class="line"><span style="color:#c9d1d9;">        root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">        # Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#c9d1d9;">        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#c9d1d9;">        location / {</span></span>
<span class="line"><span style="color:#c9d1d9;">          root /opt/build/;     </span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">        error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#c9d1d9;">        location = /404.html {</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">        error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#c9d1d9;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="nginx-reload" tabindex="-1">nginx reload <a class="header-anchor" href="#nginx-reload" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u5F53\u5B8C\u6210Nginx\u914D\u7F6E\u6587\u4EF6\u7684\u4FEE\u6539\u540E\uFF0C\u6309\u952E\u76D8ESC\u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\uFF0C</span></span>
<span class="line"><span style="color:#8B949E;">#\u7136\u540E\u8F93\u5165 :wq \u5E76\u56DE\u8F66\uFF0C\u4FDD\u5B58\u4FEE\u6539\u5E76\u9000\u51FA\u3002 \u4FEE\u6539\u5B8Cnginx\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C</span></span>
<span class="line"><span style="color:#8B949E;">#\u9700\u8981\u8F93\u5165 nginx -s reload \u91CD\u542Fnginx\u914D\u7F6E\u3002\u8FD9\u91CC\u5982\u679C\u91CD\u542F\u5931\u8D25\uFF0C</span></span>
<span class="line"><span style="color:#8B949E;">#\u53EF\u8F93\u5165 nginx -c /etc/nginx/nginx.conf \uFF0C\u7136\u540E\u518D\u6B21\u91CD\u542F\u3002</span></span>
<span class="line"><span style="color:#C9D1D9;">nginx -s reload</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u9879\u76EE\u7F16\u8BD1\u751F\u6210dist\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">pnpm run docs:build</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0A\u4F20" tabindex="-1">\u4E0A\u4F20 <a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5C06dist\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E0A\u4F20\u81F3/opt/build/</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@iZ2zegt0w39burtavwixr6Z nginx]</span><span style="color:#8B949E;"># cd /opt/build/</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@iZ2zegt0w39burtavwixr6Z build]</span><span style="color:#8B949E;"># ll</span></span>
<span class="line"><span style="color:#C9D1D9;">\u603B\u7528\u91CF 156</span></span>
<span class="line"><span style="color:#C9D1D9;">-rw-r--r-- 1 root root  14867 2\u6708  15 23:01 404.html</span></span>
<span class="line"><span style="color:#C9D1D9;">drwxr-xr-x 2 root root   4096 2\u6708  15 23:01 assets</span></span>
<span class="line"><span style="color:#C9D1D9;">-rw-r--r-- 1 root root     24 2\u6708  15 23:01 hashmap.json</span></span>
<span class="line"><span style="color:#C9D1D9;">-rw-r--r-- 1 root root  16674 2\u6708  15 23:01 index.html</span></span>
<span class="line"><span style="color:#C9D1D9;">-rw-r--r-- 1 root root 113416 2\u6708  15 23:01 logo.jpg</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u914D\u7F6E\u963F\u91CC\u4E91\u9632\u706B\u5899\u4E4B\u540E\u8BBF\u95EE <code>\u57DF\u540D + 8080 \u7AEF\u53E3</code></p></blockquote><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6950199068622602277" target="_blank" rel="noopener noreferrer">VuePress\u914D\u7F6ENginx\u4E0A\u7EBF</a></p>`,17),c=[p];function o(r,i,t,d,g,h){return n(),a("div",null,c)}var u=s(e,[["render",o]]);export{x as __pageData,u as default};
