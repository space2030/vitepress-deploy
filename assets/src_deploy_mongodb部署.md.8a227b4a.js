import{_ as s,o as n,c as a,a as l}from"./app.2a154df8.js";const g=JSON.parse('{"title":"mongodb \u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 windows install","slug":"_01-windows-install"},{"level":2,"title":"02 docker install","slug":"_02-docker-install"},{"level":2,"title":"03 linux install","slug":"_03-linux-install"},{"level":3,"title":"kill\u5173\u95ED","slug":"kill\u5173\u95ED"},{"level":3,"title":"\u51FD\u6570\u5173\u95ED","slug":"\u51FD\u6570\u5173\u95ED"},{"level":3,"title":"\u5BA2\u6237\u7AEF\u8BBF\u95EE","slug":"\u5BA2\u6237\u7AEF\u8BBF\u95EE"},{"level":3,"title":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u5DF2\u914D\u7F6E\uFF09","slug":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u5DF2\u914D\u7F6E\uFF09"},{"level":2,"title":"04 \u6570\u636E\u5E93\u547D\u4EE4","slug":"_04-\u6570\u636E\u5E93\u547D\u4EE4"},{"level":2,"title":"05 \u521B\u5EFA\u7BA1\u7406\u7528\u6237\u547D\u4EE4","slug":"_05-\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u547D\u4EE4"},{"level":2,"title":"06 \u521B\u5EFA\u666E\u901A\u7528\u6237","slug":"_06-\u521B\u5EFA\u666E\u901A\u7528\u6237"},{"level":2,"title":"07 \u666E\u901A\u7528\u6237\u7684\u8BFB\u5199\u64CD\u4F5C","slug":"_07-\u666E\u901A\u7528\u6237\u7684\u8BFB\u5199\u64CD\u4F5C"},{"level":2,"title":"08 \u66F4\u6539\u7528\u6237\u6743\u9650","slug":"_08-\u66F4\u6539\u7528\u6237\u6743\u9650"},{"level":2,"title":"09 \u66F4\u6539\u5BC6\u7801","slug":"_09-\u66F4\u6539\u5BC6\u7801"},{"level":2,"title":"10 \u5220\u9664\u7528\u6237","slug":"_10-\u5220\u9664\u7528\u6237"},{"level":2,"title":"11 \u5BA2\u6237\u7AEF","slug":"_11-\u5BA2\u6237\u7AEF"}],"relativePath":"src/deploy/mongodb\u90E8\u7F72.md","lastUpdated":1697591897000}'),p={name:"src/deploy/mongodb\u90E8\u7F72.md"},o=l(`<h1 id="mongodb-\u90E8\u7F72" tabindex="-1">mongodb \u90E8\u7F72 <a class="header-anchor" href="#mongodb-\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="_01-windows-install" tabindex="-1">01 windows install <a class="header-anchor" href="#_01-windows-install" aria-hidden="true">#</a></h2><ul><li><p>\u53C2\u8003 <a href="https://blog.csdn.net/m0_62199749/article/details/123229281" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_62199749/article/details/123229281</a></p></li><li><p>\u590D\u5236\u5230\u8FC5\u96F7</p></li></ul><blockquote><p><a href="https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi" target="_blank" rel="noopener noreferrer">https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi</a></p></blockquote><ul><li>\u8BBE\u7F6E\u5BC6\u7801 <a href="https://blog.csdn.net/hbtj_1216/article/details/120875957" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/hbtj_1216/article/details/120875957</a></li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">use admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">db.createUser({</span></span>
<span class="line"><span style="color:#C9D1D9;">    user: </span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#C9D1D9;">,    // \u7528\u6237\u540D\uFF08\u81EA\u5B9A\u4E49\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">    pwd: </span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#C9D1D9;">,  // \u5BC6\u7801\uFF08\u81EA\u5B9A\u4E49\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">    roles:[{</span></span>
<span class="line"><span style="color:#C9D1D9;">        role: </span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#C9D1D9;">,   // \u4F7F\u7528\u8D85\u7EA7\u7528\u6237\u89D2\u8272</span></span>
<span class="line"><span style="color:#C9D1D9;">        db: </span><span style="color:#A5D6FF;">&#39;admin&#39;</span><span style="color:#C9D1D9;">     // \u6307\u5B9A\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">    }]</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="_02-docker-install" tabindex="-1">02 docker install <a class="header-anchor" href="#_02-docker-install" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u955C\u50CF</span></span>
<span class="line"><span style="color:#C9D1D9;">docker pull mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u542F\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">docker run -di --name mongo \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--restart=always \\</span></span>
<span class="line"><span style="color:#C9D1D9;">-p 27017:27017 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">-v /mydata/mongodata:/data mongo</span></span>
<span class="line"></span></code></pre></div><h2 id="_03-linux-install" tabindex="-1">03 linux install <a class="header-anchor" href="#_03-linux-install" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u4E0A\u4F20\u5230</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/local/src</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u89E3\u538B</span></span>
<span class="line"><span style="color:#C9D1D9;">tar -zxvf mongodb-linux-x86_64-rhel70-4.4.1.tgz -C /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#C9D1D9;">mv /usr/local/mongodb-linux-x86_64-rhel70-4.4.1/ /usr/local/mongodb</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u524D\u53F0\u542F\u52A8\u53CA\u5173\u95ED</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u5207\u6362\u81F3\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> /usr/local/mongodb/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u5B58\u653E\u6570\u636E\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">mkdir -p /usr/local/mongodb/data/db</span></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u5B58\u653E\u65E5\u5FD7\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">mkdir -p /usr/local/mongodb/logs</span></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u65E5\u5FD7\u8BB0\u5F55\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">touch /usr/local/mongodb/logs/mongodb.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u524D\u53F0\u542F\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod --dbpath /usr/local/mongodb/data/db/ \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logpath /usr/local/mongodb/logs/mongodb.log \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logappend \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--port 27017 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--bind_ip 0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u524D\u53F0\u5173\u95ED</span></span>
<span class="line"><span style="color:#C9D1D9;">ctrl + c</span></span>
<span class="line"></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">\u540E\u53F0\u542F\u52A8\u53CA\u5173\u95ED</p><blockquote><p>\u6240\u8C13\u7684\u540E\u53F0\u542F\u52A8\u5C31\u662F\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u542F\u52A8 MongoDB\u3002\u547D\u4EE4\u4E2D\u6DFB\u52A0 --fork \u5373\u53EF</p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u5207\u6362\u81F3\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> /usr/local/mongodb/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u540E\u53F0\u542F\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod --dbpath /usr/local/mongodb/data/db/ \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logpath /usr/local/mongodb/logs/mongodb.log \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logappend \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--port 27017 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--bind_ip 0.0.0.0 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--fork</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u547D\u4EE4\u542F\u52A8\u65B9\u5F0F\u7684\u5173\u95ED</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod --dbpath /usr/local/mongodb/data/db/ \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logpath /usr/local/mongodb/logs/mongodb.log \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--logappend \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--port 27017 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--bind_ip 0.0.0.0 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--fork \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--shutdown</span></span>
<span class="line"></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\u53CA\u5173\u95ED</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5728 bin \u76EE\u5F55\u4E0B\u589E\u52A0\u4E00\u4E2A mongodb.conf \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">vim /usr/local/mongodb/bin/mongodb.conf</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># mongodb.conf \u5185\u5BB9\u5982\u4E0B</span></span>
<span class="line"><span style="color:#8B949E;"># \u6570\u636E\u6587\u4EF6\u5B58\u653E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">dbpath = /usr/local/mongodb/data/db</span></span>
<span class="line"><span style="color:#8B949E;"># \u65E5\u5FD7\u6587\u4EF6\u5B58\u653E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">logpath = /usr/local/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#8B949E;"># \u4EE5\u8FFD\u52A0\u7684\u65B9\u5F0F\u8BB0\u5F55\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#C9D1D9;">logappend = </span><span style="color:#79C0FF;">true</span></span>
<span class="line"><span style="color:#8B949E;"># \u7AEF\u53E3\u9ED8\u8BA4\u4E3A 27017</span></span>
<span class="line"><span style="color:#C9D1D9;">port = 27017</span></span>
<span class="line"><span style="color:#8B949E;"># \u5BF9\u8BBF\u95EE IP \u5730\u5740\u4E0D\u505A\u9650\u5236\uFF0C\u9ED8\u8BA4\u4E3A\u672C\u673A\u5730\u5740</span></span>
<span class="line"><span style="color:#C9D1D9;">bind_ip = 0.0.0.0</span></span>
<span class="line"><span style="color:#8B949E;"># \u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u542F\u7528\uFF0C\u5373\u5728\u540E\u53F0\u8FD0\u884C</span></span>
<span class="line"><span style="color:#C9D1D9;">fork = </span><span style="color:#79C0FF;">true</span></span>
<span class="line"><span style="color:#8B949E;"># mongodb.conf \u5185\u5BB9 </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">## \u542F\u52A8\u53CA\u5173\u95ED\u547D\u4EE4</span></span>
<span class="line"><span style="color:#8B949E;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362\u81F3\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> /usr/local/mongodb/</span></span>
<span class="line"><span style="color:#8B949E;"># \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u542F\u52A8\u670D\u52A1</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod -f bin/mongodb.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5173\u95ED</span></span>
<span class="line"><span style="color:#8B949E;"># \u914D\u7F6E\u6587\u4EF6\u542F\u52A8\u65B9\u5F0F\u7684\u5173\u95ED</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod -f bin/mongodb.conf --shutdown</span></span>
<span class="line"></span></code></pre></div></div><h3 id="kill\u5173\u95ED" tabindex="-1">kill\u5173\u95ED <a class="header-anchor" href="#kill\u5173\u95ED" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u67E5\u770B mongodb \u8FD0\u884C\u7684\u8FDB\u7A0B\u4FE1\u606F</span></span>
<span class="line"><span style="color:#C9D1D9;">ps -ef </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> grep mongodb </span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># kill -9 \u5F3A\u5236\u5173\u95ED</span></span>
<span class="line"><span style="color:#79C0FF;">kill</span><span style="color:#C9D1D9;"> -9 pid</span></span>
<span class="line"></span></code></pre></div><h3 id="\u51FD\u6570\u5173\u95ED" tabindex="-1">\u51FD\u6570\u5173\u95ED <a class="header-anchor" href="#\u51FD\u6570\u5173\u95ED" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u8FDE\u63A5 mongodb </span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362 admin \u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">use admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u6267\u884C\u4EE5\u4E0B\u51FD\u6570(2\u90091)\u5373\u53EF\u5173\u95ED\u670D\u52A1</span></span>
<span class="line"><span style="color:#D2A8FF;">db.shutdownServer</span><span style="color:#C9D1D9;">() </span></span>
<span class="line"><span style="color:#C9D1D9;">db.runCommand(\u201Cshutdown\u201D)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5BA2\u6237\u7AEF\u8BBF\u95EE" tabindex="-1">\u5BA2\u6237\u7AEF\u8BBF\u95EE <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u8BBF\u95EE" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost mongodb]</span><span style="color:#8B949E;"># bin/mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5E38\u7528\u547D\u4EE4</span></span>
<span class="line"><span style="color:#79C0FF;">help</span></span>
<span class="line"><span style="color:#D2A8FF;">db.version</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#C9D1D9;">show dbs</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u5DF2\u914D\u7F6E\uFF09" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u5DF2\u914D\u7F6E\uFF09 <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF08\u5DF2\u914D\u7F6E\uFF09" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u6B64\u914D\u7F6E\u5FC5\u987B\u5148\u542F\u52A8\u540E\u53F0mongod\uFF0C\u5426\u5219\u8FDE\u63A5\u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">vim /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u6DFB\u52A0\u5185\u5BB9</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> MONGODB_HOME=/usr/local/mongodb </span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> PATH=$PATH:$MONGODB_HOME/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5237\u65B0\u73AF\u5883\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#79C0FF;">source</span><span style="color:#C9D1D9;"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> /usr/local/mongodb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5FC5\u987B\u5148\u542F\u52A8\u540E\u53F0\u518D\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#C9D1D9;">bin/mongod -f bin/mongodb.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u542F\u52A8\u5BA2\u6237\u7AEF\u76F4\u63A5\u8F93\u5165\uFF08\u4EFB\u610F\u76EE\u5F55\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">mongo</span></span>
<span class="line"></span></code></pre></div><h2 id="_04-\u6570\u636E\u5E93\u547D\u4EE4" tabindex="-1">04 \u6570\u636E\u5E93\u547D\u4EE4 <a class="header-anchor" href="#_04-\u6570\u636E\u5E93\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u67E5\u770B\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">show dbs</span></span>
<span class="line"><span style="color:#C9D1D9;">show databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># db\u547D\u4EE4(\u663E\u793A\uFF1Atest)</span></span>
<span class="line"><span style="color:#C9D1D9;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">use admin</span></span>
<span class="line"><span style="color:#C9D1D9;">use </span><span style="color:#79C0FF;">test</span></span>
<span class="line"></span></code></pre></div><h2 id="_05-\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u547D\u4EE4" tabindex="-1">05 \u521B\u5EFA\u7BA1\u7406\u7528\u6237\u547D\u4EE4 <a class="header-anchor" href="#_05-\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u67E5\u770B\u6240\u6709\u7528\u6237</span></span>
<span class="line"><span style="color:#C9D1D9;">show users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u7528\u6237</span></span>
<span class="line"><span style="color:#C9D1D9;">db.createUser({user:</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,pwd:</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,roles:[{role:</span><span style="color:#A5D6FF;">&quot;userAdminAnyDatabase&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;admin&quot;</span><span style="color:#C9D1D9;">}]})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5173\u95ED\u53CA\u91CD\u542F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5173\u95ED</span></span>
<span class="line"><span style="color:#C9D1D9;">mongod -f /usr/local/mongodb/bin/mongodb.conf --shutdown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u7F16\u8F91mongodb.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">vim /usr/local/mongodb/bin/mongodb.conf</span></span>
<span class="line"><span style="color:#8B949E;"># \u5F00\u542F\u8BA4\u8BC1</span></span>
<span class="line"><span style="color:#C9D1D9;">auth = </span><span style="color:#79C0FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u91CD\u542F</span></span>
<span class="line"><span style="color:#C9D1D9;">mongod -f /usr/local/mongodb/bin/mongodb.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362</span></span>
<span class="line"><span style="color:#C9D1D9;">use admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u8BA4\u8BC1</span></span>
<span class="line"><span style="color:#C9D1D9;">db.auth(</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u67E5\u770B</span></span>
<span class="line"><span style="color:#C9D1D9;">db</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_06-\u521B\u5EFA\u666E\u901A\u7528\u6237" tabindex="-1">06 \u521B\u5EFA\u666E\u901A\u7528\u6237 <a class="header-anchor" href="#_06-\u521B\u5EFA\u666E\u901A\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">use </span><span style="color:#79C0FF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u666E\u901A\u7528\u6237</span></span>
<span class="line"><span style="color:#C9D1D9;">db.createUser({user:</span><span style="color:#A5D6FF;">&quot;testuser&quot;</span><span style="color:#C9D1D9;">,pwd:</span><span style="color:#A5D6FF;">&quot;123456&quot;</span><span style="color:#C9D1D9;">,roles:[{role:</span><span style="color:#A5D6FF;">&quot;readWrite&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;test&quot;</span><span style="color:#C9D1D9;">}]})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u4F7F\u7528\u666E\u901A\u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#8B949E;"># \u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#C9D1D9;">mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362</span></span>
<span class="line"><span style="color:#C9D1D9;">use </span><span style="color:#79C0FF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u666E\u901A\u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">db.auth(</span><span style="color:#A5D6FF;">&quot;testuser&quot;</span><span style="color:#C9D1D9;">,</span><span style="color:#A5D6FF;">&quot;123456&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_07-\u666E\u901A\u7528\u6237\u7684\u8BFB\u5199\u64CD\u4F5C" tabindex="-1">07 \u666E\u901A\u7528\u6237\u7684\u8BFB\u5199\u64CD\u4F5C <a class="header-anchor" href="#_07-\u666E\u901A\u7528\u6237\u7684\u8BFB\u5199\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5207\u6362\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#C9D1D9;">use </span><span style="color:#79C0FF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5199\u6743\u9650</span></span>
<span class="line"><span style="color:#C9D1D9;">db.user.insert({</span><span style="color:#A5D6FF;">&quot;name&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;zhangsan&quot;</span><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u8BFB\u6743\u9650</span></span>
<span class="line"><span style="color:#D2A8FF;">db.user.find</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="_08-\u66F4\u6539\u7528\u6237\u6743\u9650" tabindex="-1">08 \u66F4\u6539\u7528\u6237\u6743\u9650 <a class="header-anchor" href="#_08-\u66F4\u6539\u7528\u6237\u6743\u9650" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#C9D1D9;">mongo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5207\u6362</span></span>
<span class="line"><span style="color:#C9D1D9;">use admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u8BA4\u8BC1</span></span>
<span class="line"><span style="color:#C9D1D9;">db.auth(</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u67E5\u770B\u5F53\u524D\u7528\u6237\u6743\u9650</span></span>
<span class="line"><span style="color:#C9D1D9;">show users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u66F4\u6539\u7528\u6237\u6743\u9650</span></span>
<span class="line"><span style="color:#8B949E;"># \u8BED\u6CD5\u683C\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">db.updateUser(</span><span style="color:#A5D6FF;">&quot;\u7528\u6237\u540D&quot;</span><span style="color:#C9D1D9;">, {</span><span style="color:#A5D6FF;">&quot;roles&quot;</span><span style="color:#C9D1D9;">:[{</span><span style="color:#A5D6FF;">&quot;role&quot;</span><span style="color:#C9D1D9;">:</span><span style="color:#A5D6FF;">&quot;\u89D2\u8272\u540D\u79F0&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;\u6570\u636E\u5E93&quot;</span><span style="color:#C9D1D9;">},{</span><span style="color:#A5D6FF;">&quot;\u66F4\u65B0\u98792&quot;</span><span style="color:#C9D1D9;">:</span><span style="color:#A5D6FF;">&quot;\u66F4\u65B0\u5185\u5BB9&quot;</span><span style="color:#C9D1D9;">}]})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u793A\u4F8B</span></span>
<span class="line"><span style="color:#C9D1D9;">db.updateUser(</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">, {</span><span style="color:#A5D6FF;">&quot;roles&quot;</span><span style="color:#C9D1D9;">:[{</span><span style="color:#A5D6FF;">&quot;role&quot;</span><span style="color:#C9D1D9;">:</span><span style="color:#A5D6FF;">&quot;userAdminAnyDatabase&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;admin&quot;</span><span style="color:#C9D1D9;">},</span></span>
<span class="line"><span style="color:#C9D1D9;">{role:</span><span style="color:#A5D6FF;">&quot;readWriteAnyDatabase&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;admin&quot;</span><span style="color:#C9D1D9;">},{role:</span><span style="color:#A5D6FF;">&quot;dbAdminAnyDatabase&quot;</span><span style="color:#C9D1D9;">,db:</span><span style="color:#A5D6FF;">&quot;admin&quot;</span><span style="color:#C9D1D9;">}]})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_09-\u66F4\u6539\u5BC6\u7801" tabindex="-1">09 \u66F4\u6539\u5BC6\u7801 <a class="header-anchor" href="#_09-\u66F4\u6539\u5BC6\u7801" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u65B9\u5F0F\u4E00</span></span>
<span class="line"><span style="color:#C9D1D9;">db.updateUser(</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,{</span><span style="color:#A5D6FF;">&quot;pwd&quot;</span><span style="color:#C9D1D9;">:</span><span style="color:#A5D6FF;">&quot;1234&quot;</span><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u65B9\u5F0F\u4E8C</span></span>
<span class="line"><span style="color:#C9D1D9;">db.changeUserPassword(</span><span style="color:#A5D6FF;">&quot;uaad&quot;</span><span style="color:#C9D1D9;">,</span><span style="color:#A5D6FF;">&quot;123456&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_10-\u5220\u9664\u7528\u6237" tabindex="-1">10 \u5220\u9664\u7528\u6237 <a class="header-anchor" href="#_10-\u5220\u9664\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5207\u6362</span></span>
<span class="line"><span style="color:#C9D1D9;">use </span><span style="color:#79C0FF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5220\u9664</span></span>
<span class="line"><span style="color:#C9D1D9;">db.dropUser(</span><span style="color:#A5D6FF;">&quot;testuser&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_11-\u5BA2\u6237\u7AEF" tabindex="-1">11 \u5BA2\u6237\u7AEF <a class="header-anchor" href="#_11-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h2><p><a href="https://www.mongodb.com/docs/manual/reference/connection-string/" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/docs/manual/reference/connection-string/</a></p><div class="tip custom-block"><p class="custom-block-title">\u670D\u52A1\u5668\u9632\u706B\u5899</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5728\u670D\u52A1\u5668\u4E2D\u5C06 27017 \u7AEF\u53E3\u6DFB\u52A0\u5230\u9632\u706B\u5899\u89C4\u5219</span></span>
<span class="line"><span style="color:#C9D1D9;">firewall-cmd --zone=public --add-port=27017/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5BF9\u9632\u706B\u5899\u8FDB\u884C\u91CD\u8F7D</span></span>
<span class="line"><span style="color:#C9D1D9;">firewall-cmd --reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u67E5\u8BE2\u6B64\u65F6\u9632\u706B\u5899\u4E2D 27017 \u7AEF\u53E3\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#C9D1D9;">firewall-cmd --zone=public --query-port=27017/tcp</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">mongodb compass</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;"># \u5B98\u65B9\u793A\u4F8B</span></span>
<span class="line"><span style="color:#c9d1d9;">mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># \u672C\u5730\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#c9d1d9;">mongodb://uaad:uaad@192.168.200.200:27017/?authSource=admin</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div>`,39),e=[o];function c(t,r,i,d,D,y){return n(),a("div",null,e)}var b=s(p,[["render",c]]);export{g as __pageData,b as default};
