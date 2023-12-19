import{_ as s,o as n,c as a,a as l}from"./app.2a154df8.js";const v=JSON.parse('{"title":"redis \u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 redis windows","slug":"_01-redis-windows"},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003"},{"level":3,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":2,"title":"02  redis \u955C\u50CF","slug":"_02-redis-\u955C\u50CF"},{"level":2,"title":"03 redis conf","slug":"_03-redis-conf"},{"level":2,"title":"04 redis \u5BB9\u5668","slug":"_04-redis-\u5BB9\u5668"},{"level":3,"title":"04 redis \u63A7\u5236\u53F0","slug":"_04-redis-\u63A7\u5236\u53F0"},{"level":2,"title":"05 redis yum","slug":"_05-redis-yum"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003-1"}],"relativePath":"src/deploy/redis\u90E8\u7F72.md","lastUpdated":1697420719000}'),e={name:"src/deploy/redis\u90E8\u7F72.md"},p=l(`<h1 id="redis-\u90E8\u7F72" tabindex="-1">redis \u90E8\u7F72 <a class="header-anchor" href="#redis-\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="_01-redis-windows" tabindex="-1">01 redis windows <a class="header-anchor" href="#_01-redis-windows" aria-hidden="true">#</a></h2><h3 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h3><p><a href="https://www.jb51.net/article/218746.htm" target="_blank" rel="noopener noreferrer">Windows\u4E0B\u5B89\u88C5Redis\u7684\u6D41\u7A0B\u8BE6\u89E3</a></p><h3 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h3><p><a href="https://github.com/microsoftarchive/redis/releases" target="_blank" rel="noopener noreferrer">https://github.com/microsoftarchive/redis/releases</a></p><blockquote><p>\u7248\u672C\uFF1Awin-3.2.100 Redis-x64-3.2.100</p></blockquote><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><p>Redis-x64-3.2.100\u4E0Bredis.windows.conf</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u8BBE\u7F6E\u5BC6\u7801</span></span>
<span class="line"><span style="color:#8B949E;"># requirepass foobared</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">requirepass root</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h3><ul><li>\u542F\u52A8redis-server</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">:: \u8FDB\u5165D\u76D8</span></span>
<span class="line"><span style="color:#C9D1D9;">d:</span></span>
<span class="line"><span style="color:#C9D1D9;">:: \u8FDB\u5165redis\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;">  D:</span><span style="color:#79C0FF;">\\s</span><span style="color:#C9D1D9;">oft</span><span style="color:#79C0FF;">\\r</span><span style="color:#C9D1D9;">edis\\</span></span>
<span class="line"><span style="color:#C9D1D9;">:: \u542F\u52A8\u670D\u52A1</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-server.exe redis.windows.conf</span></span>
<span class="line"></span></code></pre></div><ul><li>\u542F\u52A8redis-cli</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">:: \u8FDB\u5165D\u76D8</span></span>
<span class="line"><span style="color:#C9D1D9;">d:</span></span>
<span class="line"><span style="color:#C9D1D9;">::\u8FDB\u5165redis\u76EE\u5F55</span></span>
<span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;">  D:</span><span style="color:#79C0FF;">\\s</span><span style="color:#C9D1D9;">oft</span><span style="color:#79C0FF;">\\r</span><span style="color:#C9D1D9;">edis\\</span></span>
<span class="line"><span style="color:#C9D1D9;">:: \u542F\u52A8\u670D\u52A1</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli.exe -h 127.0.0.1 -p 6379 -a root</span></span>
<span class="line"></span></code></pre></div><h2 id="_02-redis-\u955C\u50CF" tabindex="-1">02 redis \u955C\u50CF <a class="header-anchor" href="#_02-redis-\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u4E0B\u8F7D\u6700\u65B0\u7248Redis\u955C\u50CF(\u5176\u5B9E\u6B64\u547D\u4EE4\u5C31\u7B49\u540C\u4E8E : docker pull redis:latest )</span></span>
<span class="line"><span style="color:#C9D1D9;">docker pull redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u4E0B\u8F7D\u6307\u5B9A\u7248\u672C\u7684Redis\u955C\u50CF (xxx\u6307\u5177\u4F53\u7248\u672C\u53F7)</span></span>
<span class="line"><span style="color:#C9D1D9;">docker pull redis:xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u68C0\u67E5\u5F53\u524D\u6240\u6709Docker\u4E0B\u8F7D\u7684\u955C\u50CF</span></span>
<span class="line"><span style="color:#C9D1D9;">docker images</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>redis \u914D\u7F6E\u6587\u4EF6</strong></li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># 1. \u542F\u52A8\u524D\u9700\u8981\u5148\u521B\u5EFARedis\u5916\u90E8\u6302\u8F7D\u7684\u914D\u7F6E\u6587\u4EF6\uFF08 /mydata/redis/conf/redis.conf \uFF09\uFF0C</span></span>
<span class="line"><span style="color:#8B949E;"># 2. Redis\u672C\u8EAB\u5BB9\u5668\u53EA\u5B58\u5728 /etc/redis \u76EE\u5F55 , \u672C\u8EAB\u5C31\u4E0D\u521B\u5EFA redis.conf \u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#8B949E;"># 3. \u5F53\u670D\u52A1\u5668\u548C\u5BB9\u5668\u90FD\u4E0D\u5B58\u5728 redis.conf \u6587\u4EF6\u65F6, \u6267\u884C\u542F\u52A8\u547D\u4EE4\u7684\u65F6\u5019 docker \u4F1A\u5C06 redis.conf \u4F5C\u4E3A\u76EE\u5F55\u521B\u5EFA\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">mkdir -p /mydata/redis/conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u521B\u5EFA\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">touch /mydata/redis/conf/redis.conf</span></span>
<span class="line"></span></code></pre></div><h2 id="_03-redis-conf" tabindex="-1">03 redis conf <a class="header-anchor" href="#_03-redis-conf" aria-hidden="true">#</a></h2><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">#redis.conf</span></span>
<span class="line"><span style="color:#c9d1d9;"># Redis configuration file example.</span></span>
<span class="line"><span style="color:#c9d1d9;"># ./redis-server /path/to/redis.conf</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################## INCLUDES ###################################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FD9\u5728\u4F60\u6709\u6807\u51C6\u914D\u7F6E\u6A21\u677F\u4F46\u662F\u6BCF\u4E2Aredis\u670D\u52A1\u5668\u53C8\u9700\u8981\u4E2A\u6027\u8BBE\u7F6E\u7684\u65F6\u5019\u5F88\u6709\u7528\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># include /path/to/local.conf</span></span>
<span class="line"><span style="color:#c9d1d9;"># include /path/to/other.conf</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################ GENERAL #####################################</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u662F\u5426\u5728\u540E\u53F0\u6267\u884C\uFF0Cyes\uFF1A\u540E\u53F0\u8FD0\u884C\uFF1Bno\uFF1A\u4E0D\u662F\u540E\u53F0\u8FD0\u884C\uFF08\u8001\u7248\u672C\u9ED8\u8BA4\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;"># daemonize yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  #3.2\u91CC\u7684\u53C2\u6570\uFF0C\u662F\u5426\u5F00\u542F\u4FDD\u62A4\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u5F00\u542F\u3002\u8981\u662F\u914D\u7F6E\u91CC\u6CA1\u6709\u6307\u5B9Abind\u548C\u5BC6\u7801\u3002\u5F00\u542F\u8BE5\u53C2\u6570\u540E\uFF0Credis\u53EA\u4F1A\u672C\u5730\u8FDB\u884C\u8BBF\u95EE\uFF0C\u62D2\u7EDD\u5916\u90E8\u8BBF\u95EE\u3002\u8981\u662F\u5F00\u542F\u4E86\u5BC6\u7801   \u548Cbind\uFF0C\u53EF\u4EE5\u5F00\u542F\u3002\u5426   \u5219\u6700\u597D\u5173\u95ED\uFF0C\u8BBE\u7F6E\u4E3Ano\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#   protected-mode yes</span></span>
<span class="line"><span style="color:#c9d1d9;">#redis\u7684\u8FDB\u7A0B\u6587\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;"># pidfile /var/run/redis/redis-server.pid</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#redis\u76D1\u542C\u7684\u7AEF\u53E3\u53F7\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">port 6379</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6B64\u53C2\u6570\u786E\u5B9A\u4E86TCP\u8FDE\u63A5\u4E2D\u5DF2\u5B8C\u6210\u961F\u5217(\u5B8C\u6210\u4E09\u6B21\u63E1\u624B\u4E4B\u540E)\u7684\u957F\u5EA6\uFF0C \u5F53\u7136\u6B64\u503C\u5FC5\u987B\u4E0D\u5927\u4E8ELinux\u7CFB\u7EDF\u5B9A\u4E49\u7684/proc/sys/net/core/somaxconn\u503C\uFF0C\u9ED8\u8BA4\u662F511\uFF0C\u800CLinux\u7684\u9ED8\u8BA4\u53C2\u6570\u503C\u662F128\u3002\u5F53\u7CFB\u7EDF\u5E76\u53D1\u91CF\u5927\u5E76\u4E14\u5BA2\u6237\u7AEF\u901F\u5EA6\u7F13\u6162\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E8C\u4E2A\u53C2\u6570\u4E00\u8D77\u53C2\u8003\u8BBE\u5B9A\u3002\u8BE5\u5185\u6838\u53C2\u6570\u9ED8\u8BA4\u503C\u4E00\u822C\u662F128\uFF0C\u5BF9\u4E8E\u8D1F\u8F7D\u5F88\u5927\u7684\u670D\u52A1\u7A0B\u5E8F\u6765\u8BF4\u5927\u5927\u7684\u4E0D\u591F\u3002\u4E00\u822C\u4F1A\u5C06\u5B83\u4FEE\u6539\u4E3A2048\u6216\u8005\u66F4\u5927\u3002\u5728/etc/sysctl.conf\u4E2D\u6DFB\u52A0:net.core.somaxconn = 2048\uFF0C\u7136\u540E\u5728\u7EC8\u7AEF\u4E2D\u6267\u884Csysctl -p\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># tcp-backlog 511</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6307\u5B9A redis \u53EA\u63A5\u6536\u6765\u81EA\u4E8E\u8BE5 IP \u5730\u5740\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u5C06\u5904\u7406\u6240\u6709\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#c9d1d9;"># bind 127.0.0.1</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u914D\u7F6Eunix socket\u6765\u8BA9redis\u652F\u6301\u76D1\u542C\u672C\u5730\u8FDE\u63A5\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># unixsocket /var/run/redis/redis.sock</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u914D\u7F6Eunix socket\u4F7F\u7528\u6587\u4EF6\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#c9d1d9;"># unixsocketperm 700</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># \u6B64\u53C2\u6570\u4E3A\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u7A7A\u95F2\u8D85\u8FC7timeout\uFF0C\u670D\u52A1\u7AEF\u4F1A\u65AD\u5F00\u8FDE\u63A5\uFF0C\u4E3A0\u5219\u670D\u52A1\u7AEF\u4E0D\u4F1A\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u4E0D\u80FD\u5C0F\u4E8E0\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># timeout 0</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#tcp keepalive\u53C2\u6570\u3002\u5982\u679C\u8BBE\u7F6E\u4E0D\u4E3A0\uFF0C\u5C31\u4F7F\u7528\u914D\u7F6Etcp\u7684SO_KEEPALIVE\u503C\uFF0C\u4F7F\u7528keepalive\u6709\u4E24\u4E2A\u597D\u5904:\u68C0\u6D4B\u6302\u6389\u7684\u5BF9\u7AEF\u3002\u964D\u4F4E\u4E2D\u95F4\u8BBE\u5907\u51FA\u95EE\u9898\u800C\u5BFC\u81F4\u7F51\u7EDC\u770B\u4F3C\u8FDE\u63A5\u5374\u5DF2\u7ECF\u4E0E\u5BF9\u7AEF\u7AEF\u53E3\u7684\u95EE\u9898\u3002\u5728Linux\u5185\u6838\u4E2D\uFF0C\u8BBE\u7F6E\u4E86keepalive\uFF0Credis\u4F1A\u5B9A\u65F6\u7ED9\u5BF9\u7AEF\u53D1\u9001ack\u3002\u68C0\u6D4B\u5230\u5BF9\u7AEF\u5173\u95ED\u9700\u8981\u4E24\u500D\u7684\u8BBE\u7F6E\u503C\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># tcp-keepalive 0</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6307\u5B9A\u4E86\u670D\u52A1\u7AEF\u65E5\u5FD7\u7684\u7EA7\u522B\u3002\u7EA7\u522B\u5305\u62EC\uFF1Adebug\uFF08\u5F88\u591A\u4FE1\u606F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u3001\u6D4B\u8BD5\uFF09\uFF0Cverbose\uFF08\u8BB8\u591A\u6709\u7528\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u6CA1\u6709debug\u7EA7\u522B\u4FE1\u606F\u591A\uFF09\uFF0Cnotice\uFF08\u9002\u5F53\u7684\u65E5\u5FD7\u7EA7\u522B\uFF0C\u9002\u5408\u751F\u4EA7\u73AF\u5883\uFF09\uFF0Cwarn\uFF08\u53EA\u6709\u975E\u5E38\u91CD\u8981\u7684\u4FE1\u606F\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;"># loglevel notice</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6307\u5B9A\u4E86\u8BB0\u5F55\u65E5\u5FD7\u7684\u6587\u4EF6\u3002\u7A7A\u5B57\u7B26\u4E32\u7684\u8BDD\uFF0C\u65E5\u5FD7\u4F1A\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002\u540E\u53F0\u8FD0\u884C\u7684redis\u6807\u51C6\u8F93\u51FA\u662F/dev/null\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># logfile /var/log/redis/redis-server.log</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u662F\u5426\u6253\u5F00\u8BB0\u5F55syslog\u529F\u80FD</span></span>
<span class="line"><span style="color:#c9d1d9;"># syslog-enabled no</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#syslog\u7684\u6807\u8BC6\u7B26\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># syslog-ident redis</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u65E5\u5FD7\u7684\u6765\u6E90\u3001\u8BBE\u5907</span></span>
<span class="line"><span style="color:#c9d1d9;"># syslog-facility local0</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u5E93\u7684\u6570\u91CF\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u6570\u636E\u5E93\u662FDB 0\u3002\u53EF\u4EE5\u901A\u8FC7\u201DSELECT \u201C\u547D\u4EE4\u9009\u62E9\u4E00\u4E2Adb</span></span>
<span class="line"><span style="color:#c9d1d9;">databases 16</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################ SNAPSHOTTING ################################</span></span>
<span class="line"><span style="color:#c9d1d9;"># \u5FEB\u7167\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;"># \u6CE8\u91CA\u6389\u201Csave\u201D\u8FD9\u4E00\u884C\u914D\u7F6E\u9879\u5C31\u53EF\u4EE5\u8BA9\u4FDD\u5B58\u6570\u636E\u5E93\u529F\u80FD\u5931\u6548</span></span>
<span class="line"><span style="color:#c9d1d9;"># \u8BBE\u7F6Esedis\u8FDB\u884C\u6570\u636E\u5E93\u955C\u50CF\u7684\u9891\u7387\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># 900\u79D2\uFF0815\u5206\u949F\uFF09\u5185\u81F3\u5C111\u4E2Akey\u503C\u6539\u53D8\uFF08\u5219\u8FDB\u884C\u6570\u636E\u5E93\u4FDD\u5B58--\u6301\u4E45\u5316\uFF09 </span></span>
<span class="line"><span style="color:#c9d1d9;"># 300\u79D2\uFF085\u5206\u949F\uFF09\u5185\u81F3\u5C1110\u4E2Akey\u503C\u6539\u53D8\uFF08\u5219\u8FDB\u884C\u6570\u636E\u5E93\u4FDD\u5B58--\u6301\u4E45\u5316\uFF09 </span></span>
<span class="line"><span style="color:#c9d1d9;"># 60\u79D2\uFF081\u5206\u949F\uFF09\u5185\u81F3\u5C1110000\u4E2Akey\u503C\u6539\u53D8\uFF08\u5219\u8FDB\u884C\u6570\u636E\u5E93\u4FDD\u5B58--\u6301\u4E45\u5316\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;"># save 900 1</span></span>
<span class="line"><span style="color:#c9d1d9;"># save 300 10</span></span>
<span class="line"><span style="color:#c9d1d9;"># save 60 10000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5F53RDB\u6301\u4E45\u5316\u51FA\u73B0\u9519\u8BEF\u540E\uFF0C\u662F\u5426\u4F9D\u7136\u8FDB\u884C\u7EE7\u7EED\u8FDB\u884C\u5DE5\u4F5C\uFF0Cyes\uFF1A\u4E0D\u80FD\u8FDB\u884C\u5DE5\u4F5C\uFF0Cno\uFF1A\u53EF\u4EE5\u7EE7\u7EED\u8FDB\u884C\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u901A\u8FC7info\u4E2D\u7684rdb_last_bgsave_status\u4E86\u89E3RDB\u6301\u4E45\u5316\u662F\u5426\u6709\u9519\u8BEF</span></span>
<span class="line"><span style="color:#c9d1d9;"># stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u4F7F\u7528\u538B\u7F29rdb\u6587\u4EF6\uFF0Crdb\u6587\u4EF6\u538B\u7F29\u4F7F\u7528LZF\u538B\u7F29\u7B97\u6CD5\uFF0Cyes\uFF1A\u538B\u7F29\uFF0C\u4F46\u662F\u9700\u8981\u4E00\u4E9Bcpu\u7684\u6D88\u8017\u3002no\uFF1A\u4E0D\u538B\u7F29\uFF0C\u9700\u8981\u66F4\u591A\u7684\u78C1\u76D8\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#c9d1d9;"># rdbcompression yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u662F\u5426\u6821\u9A8Crdb\u6587\u4EF6\u3002\u4ECErdb\u683C\u5F0F\u7684\u7B2C\u4E94\u4E2A\u7248\u672C\u5F00\u59CB\uFF0C\u5728rdb\u6587\u4EF6\u7684\u672B\u5C3E\u4F1A\u5E26\u4E0ACRC64\u7684\u6821\u9A8C\u548C\u3002\u8FD9\u8DDF\u6709\u5229\u4E8E\u6587\u4EF6\u7684\u5BB9\u9519\u6027\uFF0C\u4F46\u662F\u5728\u4FDD\u5B58rdb\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u5927\u698210%\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u8FFD\u6C42\u9AD8\u6027\u80FD\uFF0C\u53EF\u4EE5\u5173\u95ED\u8BE5\u914D\u7F6E\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># rdbchecksum yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#rdb\u6587\u4EF6\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#c9d1d9;"># dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u76EE\u5F55\uFF0C\u6570\u636E\u5E93\u7684\u5199\u5165\u4F1A\u5728\u8FD9\u4E2A\u76EE\u5F55\u3002rdb\u3001aof\u6587\u4EF6\u4E5F\u4F1A\u5199\u5728\u8FD9\u4E2A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#c9d1d9;"># dir /var/lib/redis</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################# REPLICATION #################################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u590D\u5236\u9009\u9879\uFF0Cslave\u590D\u5236\u5BF9\u5E94\u7684master\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slaveof &lt;masterip&gt; &lt;masterport&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5982\u679Cmaster\u8BBE\u7F6E\u4E86requirepass\uFF0C\u90A3\u4E48slave\u8981\u8FDE\u4E0Amaster\uFF0C\u9700\u8981\u6709master\u7684\u5BC6\u7801\u624D\u884C\u3002masterauth\u5C31\u662F\u7528\u6765\u914D\u7F6Emaster\u7684\u5BC6\u7801\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u8FDE\u4E0Amaster\u540E\u8FDB\u884C\u8BA4\u8BC1\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># masterauth &lt;master-password&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5F53\u4ECE\u5E93\u540C\u4E3B\u673A\u5931\u53BB\u8FDE\u63A5\u6216\u8005\u590D\u5236\u6B63\u5728\u8FDB\u884C\uFF0C\u4ECE\u673A\u5E93\u6709\u4E24\u79CD\u8FD0\u884C\u65B9\u5F0F\uFF1A1) \u5982\u679Cslave-serve-stale-data\u8BBE\u7F6E\u4E3Ayes(\u9ED8\u8BA4\u8BBE\u7F6E)\uFF0C\u4ECE\u5E93\u4F1A\u7EE7\u7EED\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u30022) \u5982\u679Cslave-serve-stale-data\u8BBE\u7F6E\u4E3Ano\uFF0C\u9664\u53BBINFO\u548CSLAVOF\u547D\u4EE4\u4E4B\u5916\u7684\u4EFB\u4F55\u8BF7\u6C42\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u201DSYNC with master in progress\u201D\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slave-serve-stale-data yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u4F5C\u4E3A\u4ECE\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u53EA\u8BFB\u7684\uFF08yes\uFF09\uFF0C\u53EF\u4EE5\u4FEE\u6539\u6210NO\uFF0C\u7528\u4E8E\u5199\uFF08\u4E0D\u5EFA\u8BAE\uFF09\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slave-read-only yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u662F\u5426\u4F7F\u7528socket\u65B9\u5F0F\u590D\u5236\u6570\u636E\u3002\u76EE\u524Dredis\u590D\u5236\u63D0\u4F9B\u4E24\u79CD\u65B9\u5F0F\uFF0Cdisk\u548Csocket\u3002\u5982\u679C\u65B0\u7684slave\u8FDE\u4E0A\u6765\u6216\u8005\u91CD\u8FDE\u7684slave\u65E0\u6CD5\u90E8\u5206\u540C\u6B65\uFF0C\u5C31\u4F1A\u6267\u884C\u5168\u91CF\u540C\u6B65\uFF0Cmaster\u4F1A\u751F\u6210rdb\u6587\u4EF6\u3002\u67092\u79CD\u65B9\u5F0F\uFF1Adisk\u65B9\u5F0F\u662Fmaster\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\u628Ardb\u6587\u4EF6\u4FDD\u5B58\u5230\u78C1\u76D8\uFF0C\u518D\u628A\u78C1\u76D8\u4E0A\u7684rdb\u6587\u4EF6\u4F20\u9012\u7ED9slave\u3002socket\u662Fmaster\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\uFF0C\u76F4\u63A5\u628Ardb\u6587\u4EF6\u4EE5socket\u7684\u65B9\u5F0F\u53D1\u7ED9slave\u3002disk\u65B9\u5F0F\u7684\u65F6\u5019\uFF0C\u5F53\u4E00\u4E2Ardb\u4FDD\u5B58\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u591A\u4E2Aslave\u90FD\u80FD\u5171\u4EAB\u8FD9\u4E2Ardb\u6587\u4EF6\u3002socket\u7684\u65B9\u5F0F\u5C31\u7684\u4E00\u4E2A\u4E2Aslave\u987A\u5E8F\u590D\u5236\u3002\u5728\u78C1\u76D8\u901F\u5EA6\u7F13\u6162\uFF0C\u7F51\u901F\u5FEB\u7684\u60C5\u51B5\u4E0B\u63A8\u8350\u7528socket\u65B9\u5F0F\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-diskless-sync no</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#diskless\u590D\u5236\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u9632\u6B62\u8BBE\u7F6E\u4E3A0\u3002\u4E00\u65E6\u590D\u5236\u5F00\u59CB\uFF0C\u8282\u70B9\u4E0D\u4F1A\u518D\u63A5\u6536\u65B0slave\u7684\u590D\u5236\u8BF7\u6C42\u76F4\u5230\u4E0B\u4E00\u4E2Ardb\u4F20\u8F93\u3002\u6240\u4EE5\u6700\u597D\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\uFF0C\u7B49\u66F4\u591A\u7684slave\u8FDE\u4E0A\u6765\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-diskless-sync-delay 5</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#slave\u6839\u636E\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5411\u670D\u52A1\u5668\u53D1\u9001ping\u8BF7\u6C42\u3002\u65F6\u95F4\u95F4\u9694\u53EF\u4EE5\u901A\u8FC7 repl_ping_slave_period \u6765\u8BBE\u7F6E\uFF0C\u9ED8\u8BA410\u79D2\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-ping-slave-period 10</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u590D\u5236\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3002master\u548Cslave\u90FD\u6709\u8D85\u65F6\u65F6\u95F4\u7684\u8BBE\u7F6E\u3002master\u68C0\u6D4B\u5230slave\u4E0A\u6B21\u53D1\u9001\u7684\u65F6\u95F4\u8D85\u8FC7repl-timeout\uFF0C\u5373\u8BA4\u4E3Aslave\u79BB\u7EBF\uFF0C\u6E05\u9664\u8BE5slave\u4FE1\u606F\u3002slave\u68C0\u6D4B\u5230\u4E0A\u6B21\u548Cmaster\u4EA4\u4E92\u7684\u65F6\u95F4\u8D85\u8FC7repl-timeout\uFF0C\u5219\u8BA4\u4E3Amaster\u79BB\u7EBF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662Frepl-timeout\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u6BD4repl-ping-slave-period\u66F4\u5927\u7684\u503C\uFF0C\u4E0D\u7136\u4F1A\u7ECF\u5E38\u68C0\u6D4B\u5230\u8D85\u65F6\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-timeout 60</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u662F\u5426\u7981\u6B62\u590D\u5236tcp\u94FE\u63A5\u7684tcp nodelay\u53C2\u6570\uFF0C\u53EF\u4F20\u9012yes\u6216\u8005no\u3002\u9ED8\u8BA4\u662Fno\uFF0C\u5373\u4F7F\u7528tcp nodelay\u3002\u5982\u679Cmaster\u8BBE\u7F6E\u4E86yes\u6765\u7981\u6B62tcp nodelay\u8BBE\u7F6E\uFF0C\u5728\u628A\u6570\u636E\u590D\u5236\u7ED9slave\u7684\u65F6\u5019\uFF0C\u4F1A\u51CF\u5C11\u5305\u7684\u6570\u91CF\u548C\u66F4\u5C0F\u7684\u7F51\u7EDC\u5E26\u5BBD\u3002\u4F46\u662F\u8FD9\u4E5F\u53EF\u80FD\u5E26\u6765\u6570\u636E\u7684\u5EF6\u8FDF\u3002\u9ED8\u8BA4\u6211\u4EEC\u63A8\u8350\u66F4\u5C0F\u7684\u5EF6\u8FDF\uFF0C\u4F46\u662F\u5728\u6570\u636E\u91CF\u4F20\u8F93\u5F88\u5927\u7684\u573A\u666F\u4E0B\uFF0C\u5EFA\u8BAE\u9009\u62E9yes\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-disable-tcp-nodelay no</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u590D\u5236\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u8FD9\u662F\u4E00\u4E2A\u73AF\u5F62\u590D\u5236\u7F13\u51B2\u533A\uFF0C\u7528\u6765\u4FDD\u5B58\u6700\u65B0\u590D\u5236\u7684\u547D\u4EE4\u3002\u8FD9\u6837\u5728slave\u79BB\u7EBF\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u5B8C\u5168\u590D\u5236master\u7684\u6570\u636E\uFF0C\u5982\u679C\u53EF\u4EE5\u6267\u884C\u90E8\u5206\u540C\u6B65\uFF0C\u53EA\u9700\u8981\u628A\u7F13\u51B2\u533A\u7684\u90E8\u5206\u6570\u636E\u590D\u5236\u7ED9slave\uFF0C\u5C31\u80FD\u6062\u590D\u6B63\u5E38\u590D\u5236\u72B6\u6001\u3002\u7F13\u51B2\u533A\u7684\u5927\u5C0F\u8D8A\u5927\uFF0Cslave\u79BB\u7EBF\u7684\u65F6\u95F4\u53EF\u4EE5\u66F4\u957F\uFF0C\u590D\u5236\u7F13\u51B2\u533A\u53EA\u6709\u5728\u6709slave\u8FDE\u63A5\u7684\u65F6\u5019\u624D\u5206\u914D\u5185\u5B58\u3002\u6CA1\u6709slave\u7684\u4E00\u6BB5\u65F6\u95F4\uFF0C\u5185\u5B58\u4F1A\u88AB\u91CA\u653E\u51FA\u6765\uFF0C\u9ED8\u8BA41m\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-backlog-size 5mb</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#master\u6CA1\u6709slave\u4E00\u6BB5\u65F6\u95F4\u4F1A\u91CA\u653E\u590D\u5236\u7F13\u51B2\u533A\u7684\u5185\u5B58\uFF0Crepl-backlog-ttl\u7528\u6765\u8BBE\u7F6E\u8BE5\u65F6\u95F4\u957F\u5EA6\u3002\u5355\u4F4D\u4E3A\u79D2\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># repl-backlog-ttl 3600</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5F53master\u4E0D\u53EF\u7528\uFF0CSentinel\u4F1A\u6839\u636Eslave\u7684\u4F18\u5148\u7EA7\u9009\u4E3E\u4E00\u4E2Amaster\u3002\u6700\u4F4E\u7684\u4F18\u5148\u7EA7\u7684slave\uFF0C\u5F53\u9009master\u3002\u800C\u914D\u7F6E\u62100\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u9009\u4E3E\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slave-priority 100</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#redis\u63D0\u4F9B\u4E86\u53EF\u4EE5\u8BA9master\u505C\u6B62\u5199\u5165\u7684\u65B9\u5F0F\uFF0C\u5982\u679C\u914D\u7F6E\u4E86min-slaves-to-write\uFF0C\u5065\u5EB7\u7684slave\u7684\u4E2A\u6570\u5C0F\u4E8EN\uFF0Cmater\u5C31\u7981\u6B62\u5199\u5165\u3002master\u6700\u5C11\u5F97\u6709\u591A\u5C11\u4E2A\u5065\u5EB7\u7684slave\u5B58\u6D3B\u624D\u80FD\u6267\u884C\u5199\u547D\u4EE4\u3002\u8FD9\u4E2A\u914D\u7F6E\u867D\u7136\u4E0D\u80FD\u4FDD\u8BC1N\u4E2Aslave\u90FD\u4E00\u5B9A\u80FD\u63A5\u6536\u5230master\u7684\u5199\u64CD\u4F5C\uFF0C\u4F46\u662F\u80FD\u907F\u514D\u6CA1\u6709\u8DB3\u591F\u5065\u5EB7\u7684slave\u7684\u65F6\u5019\uFF0Cmaster\u4E0D\u80FD\u5199\u5165\u6765\u907F\u514D\u6570\u636E\u4E22\u5931\u3002\u8BBE\u7F6E\u4E3A0\u662F\u5173\u95ED\u8BE5\u529F\u80FD\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># min-slaves-to-write 3</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5EF6\u8FDF\u5C0F\u4E8Emin-slaves-max-lag\u79D2\u7684slave\u624D\u8BA4\u4E3A\u662F\u5065\u5EB7\u7684slave\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># min-slaves-max-lag 10</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># \u8BBE\u7F6E1\u6216\u53E6\u4E00\u4E2A\u8BBE\u7F6E\u4E3A0\u7981\u7528\u8FD9\u4E2A\u7279\u6027\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># Setting one or the other to 0 disables the feature.</span></span>
<span class="line"><span style="color:#c9d1d9;"># By default min-slaves-to-write is set to 0 (feature disabled) and</span></span>
<span class="line"><span style="color:#c9d1d9;"># min-slaves-max-lag is set to 10.</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################## SECURITY ###################################</span></span>
<span class="line"><span style="color:#c9d1d9;">#requirepass\u914D\u7F6E\u53EF\u4EE5\u8BA9\u7528\u6237\u4F7F\u7528AUTH\u547D\u4EE4\u6765\u8BA4\u8BC1\u5BC6\u7801\uFF0C\u624D\u80FD\u4F7F\u7528\u5176\u4ED6\u547D\u4EE4\u3002\u8FD9\u8BA9redis\u53EF\u4EE5\u4F7F\u7528\u5728\u4E0D\u53D7\u4FE1\u4EFB\u7684\u7F51\u7EDC\u4E2D\u3002\u4E3A\u4E86\u4FDD\u6301\u5411\u540E\u7684\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u6CE8\u91CA\u8BE5\u547D\u4EE4\uFF0C\u56E0\u4E3A\u5927\u90E8\u5206\u7528\u6237\u4E5F\u4E0D\u9700\u8981\u8BA4\u8BC1\u3002\u4F7F\u7528requirepass\u7684\u65F6\u5019\u9700\u8981\u6CE8\u610F\uFF0C\u56E0\u4E3Aredis\u592A\u5FEB\u4E86\uFF0C\u6BCF\u79D2\u53EF\u4EE5\u8BA4\u8BC115w\u6B21\u5BC6\u7801\uFF0C\u7B80\u5355\u7684\u5BC6\u7801\u5F88\u5BB9\u6613\u88AB\u653B\u7834\uFF0C\u6240\u4EE5\u6700\u597D\u4F7F\u7528\u4E00\u4E2A\u66F4\u590D\u6742\u7684\u5BC6\u7801\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># requirepass foobared</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u628A\u5371\u9669\u7684\u547D\u4EE4\u7ED9\u4FEE\u6539\u6210\u5176\u4ED6\u540D\u79F0\u3002\u6BD4\u5982CONFIG\u547D\u4EE4\u53EF\u4EE5\u91CD\u547D\u540D\u4E3A\u4E00\u4E2A\u5F88\u96BE\u88AB\u731C\u5230\u7684\u547D\u4EE4\uFF0C\u8FD9\u6837\u7528\u6237\u4E0D\u80FD\u4F7F\u7528\uFF0C\u800C\u5185\u90E8\u5DE5\u5177\u8FD8\u80FD\u63A5\u7740\u4F7F\u7528\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8BBE\u7F6E\u6210\u4E00\u4E2A\u7A7A\u7684\u503C\uFF0C\u53EF\u4EE5\u7981\u6B62\u4E00\u4E2A\u547D\u4EE4</span></span>
<span class="line"><span style="color:#c9d1d9;"># rename-command CONFIG &quot;&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">################################### LIMITS ####################################</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># \u8BBE\u7F6E\u80FD\u8FDE\u4E0Aredis\u7684\u6700\u5927\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u91CF\u3002\u9ED8\u8BA4\u662F10000\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u3002\u7531\u4E8Eredis\u4E0D\u533A\u5206\u8FDE\u63A5\u662F\u5BA2\u6237\u7AEF\u8FDE\u63A5\u8FD8\u662F\u5185\u90E8\u6253\u5F00\u6587\u4EF6\u6216\u8005\u548Cslave\u8FDE\u63A5\u7B49\uFF0C\u6240\u4EE5maxclients\u6700\u5C0F\u5EFA\u8BAE\u8BBE\u7F6E\u523032\u3002\u5982\u679C\u8D85\u8FC7\u4E86maxclients\uFF0Credis\u4F1A\u7ED9\u65B0\u7684\u8FDE\u63A5\u53D1\u9001\u2019max number of clients reached\u2019\uFF0C\u5E76\u5173\u95ED\u8FDE\u63A5\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># maxclients 10000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#redis\u914D\u7F6E\u7684\u6700\u5927\u5185\u5B58\u5BB9\u91CF\u3002\u5F53\u5185\u5B58\u6EE1\u4E86\uFF0C\u9700\u8981\u914D\u5408maxmemory-policy\u7B56\u7565\u8FDB\u884C\u5904\u7406\u3002\u6CE8\u610Fslave\u7684\u8F93\u51FA\u7F13\u51B2\u533A\u662F\u4E0D\u8BA1\u7B97\u5728maxmemory\u5185\u7684\u3002\u6240\u4EE5\u4E3A\u4E86\u9632\u6B62\u4E3B\u673A\u5185\u5B58\u4F7F\u7528\u5B8C\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u7684maxmemory\u9700\u8981\u66F4\u5C0F\u4E00\u4E9B\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># maxmemory &lt;bytes&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5185\u5B58\u5BB9\u91CF\u8D85\u8FC7maxmemory\u540E\u7684\u5904\u7406\u7B56\u7565\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#volatile-lru\uFF1A\u5229\u7528LRU\u7B97\u6CD5\u79FB\u9664\u8BBE\u7F6E\u8FC7\u8FC7\u671F\u65F6\u95F4\u7684key\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#volatile-random\uFF1A\u968F\u673A\u79FB\u9664\u8BBE\u7F6E\u8FC7\u8FC7\u671F\u65F6\u95F4\u7684key\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#volatile-ttl\uFF1A\u79FB\u9664\u5373\u5C06\u8FC7\u671F\u7684key\uFF0C\u6839\u636E\u6700\u8FD1\u8FC7\u671F\u65F6\u95F4\u6765\u5220\u9664\uFF08\u8F85\u4EE5TTL\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;">#allkeys-lru\uFF1A\u5229\u7528LRU\u7B97\u6CD5\u79FB\u9664\u4EFB\u4F55key\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#allkeys-random\uFF1A\u968F\u673A\u79FB\u9664\u4EFB\u4F55key\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#noeviction\uFF1A\u4E0D\u79FB\u9664\u4EFB\u4F55key\uFF0C\u53EA\u662F\u8FD4\u56DE\u4E00\u4E2A\u5199\u9519\u8BEF\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u4E0A\u9762\u7684\u8FD9\u4E9B\u9A71\u9010\u7B56\u7565\uFF0C\u5982\u679Credis\u6CA1\u6709\u5408\u9002\u7684key\u9A71\u9010\uFF0C\u5BF9\u4E8E\u5199\u547D\u4EE4\uFF0C\u8FD8\u662F\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002redis\u5C06\u4E0D\u518D\u63A5\u6536\u5199\u8BF7\u6C42\uFF0C\u53EA\u63A5\u6536get\u8BF7\u6C42\u3002\u5199\u547D\u4EE4\u5305\u62EC\uFF1Aset setnx setex append incr decr rpush lpush rpushx lpushx linsert lset rpoplpush sadd sinter sinterstore sunion sunionstore sdiff sdiffstore zadd zincrby zunionstore zinterstore hset hsetnx hmset hincrby incrby decrby getset mset msetnx exec sort\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># maxmemory-policy noeviction</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#lru\u68C0\u6D4B\u7684\u6837\u672C\u6570\u3002\u4F7F\u7528lru\u6216\u8005ttl\u6DD8\u6C70\u7B97\u6CD5\uFF0C\u4ECE\u9700\u8981\u6DD8\u6C70\u7684\u5217\u8868\u4E2D\u968F\u673A\u9009\u62E9sample\u4E2Akey\uFF0C\u9009\u51FA\u95F2\u7F6E\u65F6\u95F4\u6700\u957F\u7684key\u79FB\u9664\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># maxmemory-samples 5</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">############################## APPEND ONLY MODE ###############################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u9ED8\u8BA4redis\u4F7F\u7528\u7684\u662Frdb\u65B9\u5F0F\u6301\u4E45\u5316\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728\u8BB8\u591A\u5E94\u7528\u4E2D\u5DF2\u7ECF\u8DB3\u591F\u7528\u4E86\u3002\u4F46\u662Fredis\u5982\u679C\u4E2D\u9014\u5B95\u673A\uFF0C\u4F1A\u5BFC\u81F4\u53EF\u80FD\u6709\u51E0\u5206\u949F\u7684\u6570\u636E\u4E22\u5931\uFF0C\u6839\u636Esave\u6765\u7B56\u7565\u8FDB\u884C\u6301\u4E45\u5316\uFF0CAppend Only File\u662F\u53E6\u4E00\u79CD\u6301\u4E45\u5316\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u66F4\u597D\u7684\u6301\u4E45\u5316\u7279\u6027\u3002Redis\u4F1A\u628A\u6BCF\u6B21\u5199\u5165\u7684\u6570\u636E\u5728\u63A5\u6536\u540E\u90FD\u5199\u5165 appendonly.aof \u6587\u4EF6\uFF0C\u6BCF\u6B21\u542F\u52A8\u65F6Redis\u90FD\u4F1A\u5148\u628A\u8FD9\u4E2A\u6587\u4EF6\u7684\u6570\u636E\u8BFB\u5165\u5185\u5B58\u91CC\uFF0C\u5148\u5FFD\u7565RDB\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># appendonly no</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#aof\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#c9d1d9;"># appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#aof\u6301\u4E45\u5316\u7B56\u7565\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#c9d1d9;">#no\u8868\u793A\u4E0D\u6267\u884Cfsync\uFF0C\u7531\u64CD\u4F5C\u7CFB\u7EDF\u4FDD\u8BC1\u6570\u636E\u540C\u6B65\u5230\u78C1\u76D8\uFF0C\u901F\u5EA6\u6700\u5FEB\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#always\u8868\u793A\u6BCF\u6B21\u5199\u5165\u90FD\u6267\u884Cfsync\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u540C\u6B65\u5230\u78C1\u76D8\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#everysec\u8868\u793A\u6BCF\u79D2\u6267\u884C\u4E00\u6B21fsync\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E22\u5931\u8FD91s\u6570\u636E\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># appendfsync everysec</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># \u5728aof\u91CD\u5199\u6216\u8005\u5199\u5165rdb\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u5927\u91CFIO\uFF0C\u6B64\u65F6\u5BF9\u4E8Eeverysec\u548Calways\u7684aof\u6A21\u5F0F\u6765\u8BF4\uFF0C\u6267\u884Cfsync\u4F1A\u9020\u6210\u963B\u585E\u8FC7\u957F\u65F6\u95F4\uFF0Cno-appendfsync-on-rewrite\u5B57\u6BB5\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E\u4E3Ano\u3002\u5982\u679C\u5BF9\u5EF6\u8FDF\u8981\u6C42\u5F88\u9AD8\u7684\u5E94\u7528\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u8BBE\u7F6E\u4E3Ayes\uFF0C\u5426\u5219\u8FD8\u662F\u8BBE\u7F6E\u4E3Ano\uFF0C\u8FD9\u6837\u5BF9\u6301\u4E45\u5316\u7279\u6027\u6765\u8BF4\u8FD9\u662F\u66F4\u5B89\u5168\u7684\u9009\u62E9\u3002\u8BBE\u7F6E\u4E3Ayes\u8868\u793Arewrite\u671F\u95F4\u5BF9\u65B0\u5199\u64CD\u4F5C\u4E0Dfsync,\u6682\u65F6\u5B58\u5728\u5185\u5B58\u4E2D,\u7B49rewrite\u5B8C\u6210\u540E\u518D\u5199\u5165\uFF0C\u9ED8\u8BA4\u4E3Ano\uFF0C\u5EFA\u8BAEyes\u3002Linux\u7684\u9ED8\u8BA4fsync\u7B56\u7565\u662F30\u79D2\u3002\u53EF\u80FD\u4E22\u593130\u79D2\u6570\u636E\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># no-appendfsync-on-rewrite no</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#aof\u81EA\u52A8\u91CD\u5199\u914D\u7F6E\u3002\u5F53\u76EE\u524Daof\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u4E0A\u4E00\u6B21\u91CD\u5199\u7684aof\u6587\u4EF6\u5927\u5C0F\u7684\u767E\u5206\u4E4B\u591A\u5C11\u8FDB\u884C\u91CD\u5199\uFF0C\u5373\u5F53aof\u6587\u4EF6\u589E\u957F\u5230\u4E00\u5B9A\u5927\u5C0F\u7684\u65F6\u5019Redis\u80FD\u591F\u8C03\u7528bgrewriteaof\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u91CD\u5199\u3002\u5F53\u524DAOF\u6587\u4EF6\u5927\u5C0F\u662F\u4E0A\u6B21\u65E5\u5FD7\u91CD\u5199\u5F97\u5230AOF\u6587\u4EF6\u5927\u5C0F\u7684\u4E8C\u500D\uFF08\u8BBE\u7F6E\u4E3A100\uFF09\u65F6\uFF0C\u81EA\u52A8\u542F\u52A8\u65B0\u7684\u65E5\u5FD7\u91CD\u5199\u8FC7\u7A0B\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># auto-aof-rewrite-percentage 100</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8BBE\u7F6E\u5141\u8BB8\u91CD\u5199\u7684\u6700\u5C0Faof\u6587\u4EF6\u5927\u5C0F\uFF0C\u907F\u514D\u4E86\u8FBE\u5230\u7EA6\u5B9A\u767E\u5206\u6BD4\u4F46\u5C3A\u5BF8\u4ECD\u7136\u5F88\u5C0F\u7684\u60C5\u51B5\u8FD8\u8981\u91CD\u5199</span></span>
<span class="line"><span style="color:#c9d1d9;"># auto-aof-rewrite-min-size 64mb</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#aof\u6587\u4EF6\u53EF\u80FD\u5728\u5C3E\u90E8\u662F\u4E0D\u5B8C\u6574\u7684\uFF0C\u5F53redis\u542F\u52A8\u7684\u65F6\u5019\uFF0Caof\u6587\u4EF6\u7684\u6570\u636E\u88AB\u8F7D\u5165\u5185\u5B58\u3002\u91CD\u542F\u53EF\u80FD\u53D1\u751F\u5728redis\u6240\u5728\u7684\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u5B95\u673A\u540E\uFF0C\u5C24\u5176\u5728ext4\u6587\u4EF6\u7CFB\u7EDF\u6CA1\u6709\u52A0\u4E0Adata=ordered\u9009\u9879\uFF08redis\u5B95\u673A\u6216\u8005\u5F02\u5E38\u7EC8\u6B62\u4E0D\u4F1A\u9020\u6210\u5C3E\u90E8\u4E0D\u5B8C\u6574\u73B0\u8C61\u3002\uFF09\u51FA\u73B0\u8FD9\u79CD\u73B0\u8C61\uFF0C\u53EF\u4EE5\u9009\u62E9\u8BA9redis\u9000\u51FA\uFF0C\u6216\u8005\u5BFC\u5165\u5C3D\u53EF\u80FD\u591A\u7684\u6570\u636E\u3002\u5982\u679C\u9009\u62E9\u7684\u662Fyes\uFF0C\u5F53\u622A\u65AD\u7684aof\u6587\u4EF6\u88AB\u5BFC\u5165\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u53D1\u5E03\u4E00\u4E2Alog\u7ED9\u5BA2\u6237\u7AEF\u7136\u540Eload\u3002\u5982\u679C\u662Fno\uFF0C\u7528\u6237\u5FC5\u987B\u624B\u52A8redis-check-aof\u4FEE\u590DAOF\u6587\u4EF6\u624D\u53EF\u4EE5\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># aof-load-truncated yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################ LUA SCRIPTING ###############################</span></span>
<span class="line"><span style="color:#c9d1d9;"># \u5982\u679C\u8FBE\u5230\u6700\u5927\u65F6\u95F4\u9650\u5236\uFF08\u6BEB\u79D2\uFF09\uFF0Credis\u4F1A\u8BB0\u4E2Alog\uFF0C\u7136\u540E\u8FD4\u56DEerror\u3002\u5F53\u4E00\u4E2A\u811A\u672C\u8D85\u8FC7\u4E86\u6700\u5927\u65F6\u9650\u3002\u53EA\u6709SCRIPT KILL\u548CSHUTDOWN NOSAVE\u53EF\u4EE5\u7528\u3002\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u6740\u6CA1\u6709\u8C03write\u547D\u4EE4\u7684\u4E1C\u897F\u3002\u8981\u662F\u5DF2\u7ECF\u8C03\u7528\u4E86write\uFF0C\u53EA\u80FD\u7528\u7B2C\u4E8C\u4E2A\u547D\u4EE4\u6740\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># lua-time-limit 5000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################ REDIS CLUSTER ###############################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u96C6\u7FA4\u5F00\u5173\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u5F00\u542F\u96C6\u7FA4\u6A21\u5F0F\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-enabled yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u96C6\u7FA4\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6301\u4E45\u5316\u4FDD\u5B58\u96C6\u7FA4\u7684\u4FE1\u606F\u3002\u8FD9\u4E2A\u6587\u4EF6\u5E76\u4E0D\u9700\u8981\u624B\u52A8\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u6709Redis\u751F\u6210\u5E76\u66F4\u65B0\uFF0C\u6BCF\u4E2ARedis\u96C6\u7FA4\u8282\u70B9\u9700\u8981\u4E00\u4E2A\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BF7\u786E\u4FDD\u4E0E\u5B9E\u4F8B\u8FD0\u884C\u7684\u7CFB\u7EDF\u4E2D\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u4E0D\u51B2\u7A81</span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-config-file nodes-6379.conf</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8282\u70B9\u4E92\u8FDE\u8D85\u65F6\u7684\u9600\u503C\u3002\u96C6\u7FA4\u8282\u70B9\u8D85\u65F6\u6BEB\u79D2\u6570</span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-node-timeout 15000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5728\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u7684\u65F6\u5019\uFF0C\u5168\u90E8slave\u90FD\u4F1A\u8BF7\u6C42\u7533\u8BF7\u4E3Amaster\uFF0C\u4F46\u662F\u6709\u4E9Bslave\u53EF\u80FD\u4E0Emaster\u65AD\u5F00\u8FDE\u63A5\u4E00\u6BB5\u65F6\u95F4\u4E86\uFF0C\u5BFC\u81F4\u6570\u636E\u8FC7\u4E8E\u9648\u65E7\uFF0C\u8FD9\u6837\u7684slave\u4E0D\u5E94\u8BE5\u88AB\u63D0\u5347\u4E3Amaster\u3002\u8BE5\u53C2\u6570\u5C31\u662F\u7528\u6765\u5224\u65ADslave\u8282\u70B9\u4E0Emaster\u65AD\u7EBF\u7684\u65F6\u95F4\u662F\u5426\u8FC7\u957F\u3002\u5224\u65AD\u65B9\u6CD5\u662F\uFF1A</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6BD4\u8F83slave\u65AD\u5F00\u8FDE\u63A5\u7684\u65F6\u95F4\u548C(node-timeout * slave-validity-factor) + repl-ping-slave-period</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5982\u679C\u8282\u70B9\u8D85\u65F6\u65F6\u95F4\u4E3A\u4E09\u5341\u79D2, \u5E76\u4E14slave-validity-factor\u4E3A10,\u5047\u8BBE\u9ED8\u8BA4\u7684repl-ping-slave-period\u662F10\u79D2\uFF0C\u5373\u5982\u679C\u8D85\u8FC7310\u79D2slave\u5C06\u4E0D\u4F1A\u5C1D\u8BD5\u8FDB\u884C\u6545\u969C\u8F6C\u79FB </span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-slave-validity-factor 10</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#master\u7684slave\u6570\u91CF\u5927\u4E8E\u8BE5\u503C\uFF0Cslave\u624D\u80FD\u8FC1\u79FB\u5230\u5176\u4ED6\u5B64\u7ACBmaster\u4E0A\uFF0C\u5982\u8FD9\u4E2A\u53C2\u6570\u82E5\u88AB\u8BBE\u4E3A2\uFF0C\u90A3\u4E48\u53EA\u6709\u5F53\u4E00\u4E2A\u4E3B\u8282\u70B9\u62E5\u67092 \u4E2A\u53EF\u5DE5\u4F5C\u7684\u4ECE\u8282\u70B9\u65F6\uFF0C\u5B83\u7684\u4E00\u4E2A\u4ECE\u8282\u70B9\u4F1A\u5C1D\u8BD5\u8FC1\u79FB\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-migration-barrier 1</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u96C6\u7FA4\u5168\u90E8\u7684slot\u6709\u8282\u70B9\u8D1F\u8D23\uFF0C\u96C6\u7FA4\u72B6\u6001\u624D\u4E3Aok\uFF0C\u624D\u80FD\u63D0\u4F9B\u670D\u52A1\u3002\u8BBE\u7F6E\u4E3Ano\uFF0C\u53EF\u4EE5\u5728slot\u6CA1\u6709\u5168\u90E8\u5206\u914D\u7684\u65F6\u5019\u63D0\u4F9B\u670D\u52A1\u3002\u4E0D\u5EFA\u8BAE\u6253\u5F00\u8BE5\u914D\u7F6E\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u5206\u533A\u7684\u65F6\u5019\uFF0C\u5C0F\u5206\u533A\u7684master\u4E00\u76F4\u5728\u63A5\u53D7\u5199\u8BF7\u6C42\uFF0C\u800C\u9020\u6210\u5F88\u957F\u65F6\u95F4\u6570\u636E\u4E0D\u4E00\u81F4\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># cluster-require-full-coverage yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################## SLOW LOG ###################################</span></span>
<span class="line"><span style="color:#c9d1d9;">###slog log\u662F\u7528\u6765\u8BB0\u5F55redis\u8FD0\u884C\u4E2D\u6267\u884C\u6BD4\u8F83\u6162\u7684\u547D\u4EE4\u8017\u65F6\u3002\u5F53\u547D\u4EE4\u7684\u6267\u884C\u8D85\u8FC7\u4E86\u6307\u5B9A\u65F6\u95F4\uFF0C\u5C31\u8BB0\u5F55\u5728slow log\u4E2D\uFF0Cslog log\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u6240\u4EE5\u6CA1\u6709IO\u64CD\u4F5C\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6267\u884C\u65F6\u95F4\u6BD4slowlog-log-slower-than\u5927\u7684\u8BF7\u6C42\u8BB0\u5F55\u5230slowlog\u91CC\u9762\uFF0C\u5355\u4F4D\u662F\u5FAE\u79D2\uFF0C\u6240\u4EE51000000\u5C31\u662F1\u79D2\u3002\u6CE8\u610F\uFF0C\u8D1F\u6570\u65F6\u95F4\u4F1A\u7981\u7528\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u800C0\u5219\u4F1A\u5F3A\u5236\u8BB0\u5F55\u6240\u6709\u547D\u4EE4\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slowlog-log-slower-than 10000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6162\u67E5\u8BE2\u65E5\u5FD7\u957F\u5EA6\u3002\u5F53\u4E00\u4E2A\u65B0\u7684\u547D\u4EE4\u88AB\u5199\u8FDB\u65E5\u5FD7\u7684\u65F6\u5019\uFF0C\u6700\u8001\u7684\u90A3\u4E2A\u8BB0\u5F55\u4F1A\u88AB\u5220\u6389\u3002\u8FD9\u4E2A\u957F\u5EA6\u6CA1\u6709\u9650\u5236\u3002\u53EA\u8981\u6709\u8DB3\u591F\u7684\u5185\u5B58\u5C31\u884C\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 SLOWLOG RESET \u6765\u91CA\u653E\u5185\u5B58\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># slowlog-max-len 128</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">################################ LATENCY MONITOR ##############################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5EF6\u8FDF\u76D1\u63A7\u529F\u80FD\u662F\u7528\u6765\u76D1\u63A7redis\u4E2D\u6267\u884C\u6BD4\u8F83\u7F13\u6162\u7684\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u7528LATENCY\u6253\u5370redis\u5B9E\u4F8B\u5728\u8DD1\u547D\u4EE4\u65F6\u7684\u8017\u65F6\u56FE\u8868\u3002\u53EA\u8BB0\u5F55\u5927\u4E8E\u7B49\u4E8E\u4E0B\u8FB9\u8BBE\u7F6E\u7684\u503C\u7684\u64CD\u4F5C\u30020\u7684\u8BDD\uFF0C\u5C31\u662F\u5173\u95ED\u76D1\u89C6\u3002\u9ED8\u8BA4\u5EF6\u8FDF\u76D1\u63A7\u529F\u80FD\u662F\u5173\u95ED\u7684\uFF0C\u5982\u679C\u4F60\u9700\u8981\u6253\u5F00\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7CONFIG SET\u547D\u4EE4\u52A8\u6001\u8BBE\u7F6E\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># latency-monitor-threshold 0</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">############################# EVENT NOTIFICATION ##############################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u952E\u7A7A\u95F4\u901A\u77E5\u4F7F\u5F97\u5BA2\u6237\u7AEF\u53EF\u4EE5\u901A\u8FC7\u8BA2\u9605\u9891\u9053\u6216\u6A21\u5F0F\uFF0C\u6765\u63A5\u6536\u90A3\u4E9B\u4EE5\u67D0\u79CD\u65B9\u5F0F\u6539\u52A8\u4E86 Redis \u6570\u636E\u96C6\u7684\u4E8B\u4EF6\u3002\u56E0\u4E3A\u5F00\u542F\u952E\u7A7A\u95F4\u901A\u77E5\u529F\u80FD\u9700\u8981\u6D88\u8017\u4E00\u4E9B CPU \uFF0C\u6240\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u4E0B\uFF0C\u8BE5\u529F\u80FD\u5904\u4E8E\u5173\u95ED\u72B6\u6001\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#notify-keyspace-events \u7684\u53C2\u6570\u53EF\u4EE5\u662F\u4EE5\u4E0B\u5B57\u7B26\u7684\u4EFB\u610F\u7EC4\u5408\uFF0C\u5B83\u6307\u5B9A\u4E86\u670D\u52A1\u5668\u8BE5\u53D1\u9001\u54EA\u4E9B\u7C7B\u578B\u7684\u901A\u77E5\uFF1A</span></span>
<span class="line"><span style="color:#c9d1d9;">##K \u952E\u7A7A\u95F4\u901A\u77E5\uFF0C\u6240\u6709\u901A\u77E5\u4EE5 __keyspace@__ \u4E3A\u524D\u7F00</span></span>
<span class="line"><span style="color:#c9d1d9;">##E \u952E\u4E8B\u4EF6\u901A\u77E5\uFF0C\u6240\u6709\u901A\u77E5\u4EE5 __keyevent@__ \u4E3A\u524D\u7F00</span></span>
<span class="line"><span style="color:#c9d1d9;">##g DEL \u3001 EXPIRE \u3001 RENAME \u7B49\u7C7B\u578B\u65E0\u5173\u7684\u901A\u7528\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##$ \u5B57\u7B26\u4E32\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##l \u5217\u8868\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##s \u96C6\u5408\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##h \u54C8\u5E0C\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##z \u6709\u5E8F\u96C6\u5408\u547D\u4EE4\u7684\u901A\u77E5</span></span>
<span class="line"><span style="color:#c9d1d9;">##x \u8FC7\u671F\u4E8B\u4EF6\uFF1A\u6BCF\u5F53\u6709\u8FC7\u671F\u952E\u88AB\u5220\u9664\u65F6\u53D1\u9001</span></span>
<span class="line"><span style="color:#c9d1d9;">##e \u9A71\u9010(evict)\u4E8B\u4EF6\uFF1A\u6BCF\u5F53\u6709\u952E\u56E0\u4E3A maxmemory \u653F\u7B56\u800C\u88AB\u5220\u9664\u65F6\u53D1\u9001</span></span>
<span class="line"><span style="color:#c9d1d9;">##A \u53C2\u6570 g$lshzxe \u7684\u522B\u540D</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8F93\u5165\u7684\u53C2\u6570\u4E2D\u81F3\u5C11\u8981\u6709\u4E00\u4E2A K \u6216\u8005 E\uFF0C\u5426\u5219\u7684\u8BDD\uFF0C\u4E0D\u7BA1\u5176\u4F59\u7684\u53C2\u6570\u662F\u4EC0\u4E48\uFF0C\u90FD\u4E0D\u4F1A\u6709\u4EFB\u4F55 \u901A\u77E5\u88AB\u5206\u53D1\u3002\u8BE6\u7EC6\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003http://redis.io/topics/notifications</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"># notify-keyspace-events &quot;&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">############################### ADVANCED CONFIG ###############################</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u91CF\u5C0F\u4E8E\u7B49\u4E8Ehash-max-ziplist-entries\u7684\u7528ziplist\uFF0C\u5927\u4E8Ehash-max-ziplist-entries\u7528hash</span></span>
<span class="line"><span style="color:#c9d1d9;"># hash-max-ziplist-entries 512</span></span>
<span class="line"><span style="color:#c9d1d9;">#value\u5927\u5C0F\u5C0F\u4E8E\u7B49\u4E8Ehash-max-ziplist-value\u7684\u7528ziplist\uFF0C\u5927\u4E8Ehash-max-ziplist-value\u7528hash\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># hash-max-ziplist-value 64</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u91CF\u5C0F\u4E8E\u7B49\u4E8Elist-max-ziplist-entries\u7528ziplist\uFF0C\u5927\u4E8Elist-max-ziplist-entries\u7528list\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># list-max-ziplist-entries 512</span></span>
<span class="line"><span style="color:#c9d1d9;">#value\u5927\u5C0F\u5C0F\u4E8E\u7B49\u4E8Elist-max-ziplist-value\u7684\u7528ziplist\uFF0C\u5927\u4E8Elist-max-ziplist-value\u7528list\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># list-max-ziplist-value 64</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u91CF\u5C0F\u4E8E\u7B49\u4E8Eset-max-intset-entries\u7528iniset\uFF0C\u5927\u4E8Eset-max-intset-entries\u7528set\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># set-max-intset-entries 512</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6570\u636E\u91CF\u5C0F\u4E8E\u7B49\u4E8Ezset-max-ziplist-entries\u7528ziplist\uFF0C\u5927\u4E8Ezset-max-ziplist-entries\u7528zset\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># zset-max-ziplist-entries 128</span></span>
<span class="line"><span style="color:#c9d1d9;">#value\u5927\u5C0F\u5C0F\u4E8E\u7B49\u4E8Ezset-max-ziplist-value\u7528ziplist\uFF0C\u5927\u4E8Ezset-max-ziplist-value\u7528zset\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># zset-max-ziplist-value 64</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#value\u5927\u5C0F\u5C0F\u4E8E\u7B49\u4E8Ehll-sparse-max-bytes\u4F7F\u7528\u7A00\u758F\u6570\u636E\u7ED3\u6784\uFF08sparse\uFF09\uFF0C\u5927\u4E8Ehll-sparse-max-bytes\u4F7F\u7528\u7A20\u5BC6\u7684\u6570\u636E\u7ED3\u6784\uFF08dense\uFF09\u3002\u4E00\u4E2A\u6BD416000\u5927\u7684value\u662F\u51E0\u4E4E\u6CA1\u7528\u7684\uFF0C\u5EFA\u8BAE\u7684value\u5927\u6982\u4E3A3000\u3002\u5982\u679C\u5BF9CPU\u8981\u6C42\u4E0D\u9AD8\uFF0C\u5BF9\u7A7A\u95F4\u8981\u6C42\u8F83\u9AD8\u7684\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u523010000\u5DE6\u53F3\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># hll-sparse-max-bytes 3000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#Redis\u5C06\u5728\u6BCF100\u6BEB\u79D2\u65F6\u4F7F\u75281\u6BEB\u79D2\u7684CPU\u65F6\u95F4\u6765\u5BF9redis\u7684hash\u8868\u8FDB\u884C\u91CD\u65B0hash\uFF0C\u53EF\u4EE5\u964D\u4F4E\u5185\u5B58\u7684\u4F7F\u7528\u3002\u5F53\u4F60\u7684\u4F7F\u7528\u573A\u666F\u4E2D\uFF0C\u6709\u975E\u5E38\u4E25\u683C\u7684\u5B9E\u65F6\u6027\u9700\u8981\uFF0C\u4E0D\u80FD\u591F\u63A5\u53D7Redis\u65F6\u4E0D\u65F6\u7684\u5BF9\u8BF7\u6C42\u67092\u6BEB\u79D2\u7684\u5EF6\u8FDF\u7684\u8BDD\uFF0C\u628A\u8FD9\u9879\u914D\u7F6E\u4E3Ano\u3002\u5982\u679C\u6CA1\u6709\u8FD9\u4E48\u4E25\u683C\u7684\u5B9E\u65F6\u6027\u8981\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3Ayes\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5C3D\u53EF\u80FD\u5FEB\u7684\u91CA\u653E\u5185\u5B58\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># activerehashing yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">##\u5BF9\u5BA2\u6237\u7AEF\u8F93\u51FA\u7F13\u51B2\u8FDB\u884C\u9650\u5236\u53EF\u4EE5\u5F3A\u8FEB\u90A3\u4E9B\u4E0D\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u6570\u636E\u7684\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5\uFF0C\u7528\u6765\u5F3A\u5236\u5173\u95ED\u4F20\u8F93\u7F13\u6162\u7684\u5BA2\u6237\u7AEF\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5BF9\u4E8Enormal client\uFF0C\u7B2C\u4E00\u4E2A0\u8868\u793A\u53D6\u6D88hard limit\uFF0C\u7B2C\u4E8C\u4E2A0\u548C\u7B2C\u4E09\u4E2A0\u8868\u793A\u53D6\u6D88soft limit\uFF0Cnormal client\u9ED8\u8BA4\u53D6\u6D88\u9650\u5236\uFF0C\u56E0\u4E3A\u5982\u679C\u6CA1\u6709\u5BFB\u95EE\uFF0C\u4ED6\u4EEC\u662F\u4E0D\u4F1A\u63A5\u6536\u6570\u636E\u7684\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># client-output-buffer-limit normal 0 0 0</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5BF9\u4E8Eslave client\u548CMONITER client\uFF0C\u5982\u679Cclient-output-buffer\u4E00\u65E6\u8D85\u8FC7256mb\uFF0C\u53C8\u6216\u8005\u8D85\u8FC764mb\u6301\u7EED60\u79D2\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u5C31\u4F1A\u7ACB\u5373\u65AD\u5F00\u5BA2\u6237\u7AEF\u8FDE\u63A5\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># client-output-buffer-limit slave 256mb 64mb 60</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5BF9\u4E8Epubsub client\uFF0C\u5982\u679Cclient-output-buffer\u4E00\u65E6\u8D85\u8FC732mb\uFF0C\u53C8\u6216\u8005\u8D85\u8FC78mb\u6301\u7EED60\u79D2\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u5C31\u4F1A\u7ACB\u5373\u65AD\u5F00\u5BA2\u6237\u7AEF\u8FDE\u63A5\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># client-output-buffer-limit pubsub 32mb 8mb 60</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#redis\u6267\u884C\u4EFB\u52A1\u7684\u9891\u7387\u4E3A1s\u9664\u4EE5hz\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># hz 10</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u5728aof\u91CD\u5199\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6253\u5F00\u4E86aof-rewrite-incremental-fsync\u5F00\u5173\uFF0C\u7CFB\u7EDF\u4F1A\u6BCF32MB\u6267\u884C\u4E00\u6B21fsync\u3002\u8FD9\u5BF9\u4E8E\u628A\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u662F\u6709\u5E2E\u52A9\u7684\uFF0C\u53EF\u4EE5\u907F\u514D\u8FC7\u5927\u7684\u5EF6\u8FDF\u5CF0\u503C\u3002</span></span>
<span class="line"><span style="color:#c9d1d9;"># aof-rewrite-incremental-fsync yes</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_04-redis-\u5BB9\u5668" tabindex="-1">04 redis \u5BB9\u5668 <a class="header-anchor" href="#_04-redis-\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">docker run -d \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--privileged=true \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--restart=always \\</span></span>
<span class="line"><span style="color:#C9D1D9;">-p 6379:6379 \\</span></span>
<span class="line"><span style="color:#C9D1D9;">-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \\</span></span>
<span class="line"><span style="color:#C9D1D9;">-v /mydata/redis/data:/data \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--name redis redis redis-server /etc/redis/redis.conf \\</span></span>
<span class="line"><span style="color:#C9D1D9;">--appendonly yes</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6CE8</p><p>\u6CE8\u610F : \u547D\u4EE4\u4E2D\u6240\u6709 \u5192\u53F7 \u524D\u9762\u7684\u662F\u4E3B\u673A\u914D\u7F6E , \u5192\u53F7 \u540E\u9762\u7684\u662Fmysql\u5BB9\u5668\u914D\u7F6E \u3002 \u2013restart unless-stopped : \u5728docker\u91CD\u542F\u65F6\u91CD\u542F\u5F53\u524D\u5BB9\u5668\u3002\u4F46\u4E0D\u5305\u542Bdocker\u91CD\u542F\u65F6\u5DF2\u505C\u6B62\u7684\u5BB9\u5668\u3002</p></div><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u67E5\u770B</span></span>
<span class="line"><span style="color:#C9D1D9;">docker ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u901A\u8FC7 Docker \u547D\u4EE4\u8FDB\u5165 Redis \u5BB9\u5668\u5185\u90E8</span></span>
<span class="line"><span style="color:#C9D1D9;">docker </span><span style="color:#79C0FF;">exec</span><span style="color:#C9D1D9;"> -it redis /bin/bash</span></span>
<span class="line"><span style="color:#C9D1D9;">docker </span><span style="color:#79C0FF;">exec</span><span style="color:#C9D1D9;"> -it redis bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u8FDB\u5165 Redis \u63A7\u5236\u53F0</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF\u4E3A key \u4E3A name , value \u4E3A bella \u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">set</span><span style="color:#C9D1D9;"> name bella</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B key \u4E3A name \u7684 value \u503C</span></span>
<span class="line"><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> get name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6216\u8005\u4E5F\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7Docker Redis \u547D\u4EE4\u8FDB\u5165Redis\u63A7\u5236\u53F0 (\u4E0A\u9762\u4E24\u4E2A\u547D\u4EE4\u7684\u7ED3\u5408)</span></span>
<span class="line"><span style="color:#C9D1D9;">docker </span><span style="color:#79C0FF;">exec</span><span style="color:#C9D1D9;"> -it redis-test redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u9000\u51FA</span></span>
<span class="line"><span style="color:#79C0FF;">exit</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>redis \u4FEE\u6539\u914D\u7F6E</strong></li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">\u547D\u4EE4	</span></span>
<span class="line"><span style="color:#c9d1d9;">- appendonly yes	\u542F\u52A8Redis\u6301\u4E45\u5316,\u9ED8\u8BA4 no , \u6240\u6709\u4FE1\u606F\u90FD\u5B58\u50A8\u5728\u5185\u5B58 [\u91CD\u542F\u4E22\u5931] \u8BBE\u7F6E\u4E3A yes , \u5C06\u5B58\u50A8\u5728\u786C\u76D8 [\u91CD\u542F\u8FD8\u5728]</span></span>
<span class="line"><span style="color:#c9d1d9;">- protected-mode no	\u5173\u95EDprotected-mode\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5916\u90E8\u7F51\u7EDC\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE (docker\u8C8C\u4F3C\u81EA\u52A8\u5F00\u542F\u4E86)</span></span>
<span class="line"><span style="color:#c9d1d9;">- bind 0.0.0.0	\u8BBE\u7F6E\u6240\u6709IP\u90FD\u53EF\u4EE5\u8BBF\u95EE (docker\u8C8C\u4F3C\u81EA\u52A8\u5F00\u542F\u4E86)</span></span>
<span class="line"><span style="color:#c9d1d9;">- requirepass \u5BC6\u7801	\u8BBE\u7F6E\u5BC6\u7801</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h3 id="_04-redis-\u63A7\u5236\u53F0" tabindex="-1">04 redis \u63A7\u5236\u53F0 <a class="header-anchor" href="#_04-redis-\u63A7\u5236\u53F0" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u8BBE\u7F6E\u4E86\u5BC6\u7801,\u9700\u8981\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u5165Redis\u63A7\u5236\u53F0</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">## \u8FDB\u5165Redis\u5BB9\u5668</span></span>
<span class="line"><span style="color:#C9D1D9;">docker </span><span style="color:#79C0FF;">exec</span><span style="color:#C9D1D9;"> -it redis /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">## \u901A\u8FC7\u5BC6\u7801\u8FDB\u5165Redis\u63A7\u5236\u53F0</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli -h 127.0.0.1 -p 6379 -a 123456</span></span>
<span class="line"></span></code></pre></div><h2 id="_05-redis-yum" tabindex="-1">05 redis yum <a class="header-anchor" href="#_05-redis-yum" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5B89\u88C5\u547D\u4EE4		</span></span>
<span class="line"><span style="color:#C9D1D9;">yum install -y redis </span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9ED8\u8BA4\u7AEF\u53E3		</span></span>
<span class="line"><span style="color:#C9D1D9;">6379</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u914D\u7F6E\u6587\u4EF6		</span></span>
<span class="line"><span style="color:#C9D1D9;">vi /etc/redis.conf</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span></span>
<span class="line"><span style="color:#8B949E;"># \u53BB\u6CE8\u91CA 		</span></span>
<span class="line"><span style="color:#8B949E;">#bind 127.0.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u91CD\u542F\u670D\u52A1	 </span></span>
<span class="line"><span style="color:#C9D1D9;">systemctl restart redis </span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u67E5\u770B\u7248\u672C</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-server --version</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-server -v</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u627Eredis \u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">whereis redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">redis-server: /usr/bin/redis-server /usr/share/man/man1/redis-server.1.gz</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli shutdown</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli -a </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">\u4F60\u7684\u5BC6\u7801</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> shutdown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u51FA\u73B06379\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528</span></span>
<span class="line"><span style="color:#C9D1D9;">ps -ef </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> grep -i redis</span></span>
<span class="line"><span style="color:#79C0FF;">kill</span><span style="color:#C9D1D9;"> -9 \u8FDB\u7A0B\u53F7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># redis\u542F\u52A8 </span></span>
<span class="line"><span style="color:#C9D1D9;">\u547D\u4EE4\uFF1Aredis-server </span><span style="color:#FF7B72;">&amp;</span></span>
<span class="line"><span style="color:#C9D1D9;">\u542F\u52A8\u670D\u52A1:     service redis start</span></span>
<span class="line"><span style="color:#C9D1D9;">\u505C\u6B62\u670D\u52A1:     service redis stop</span></span>
<span class="line"><span style="color:#C9D1D9;">\u91CD\u542F\u670D\u52A1:     service redis restart</span></span>
<span class="line"><span style="color:#C9D1D9;">\u670D\u52A1\u72B6\u6001\uFF1A 	 service redis status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5BA2\u6237\u7AEF\u5F00\u542F\u547D\u4EE4</span></span>
<span class="line"><span style="color:#C9D1D9;">redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5BA2\u6237\u7AEF\u5173\u95ED\u547D\u4EE4</span></span>
<span class="line"><span style="color:#79C0FF;">exit</span><span style="color:#C9D1D9;">  \u6216  quit</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003-1" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003-1" aria-hidden="true">#</a></h2><ul><li><p><a href="https://blog.csdn.net/qq_24958783/article/details/107541425" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_24958783/article/details/107541425</a></p></li><li><p>redis.conf \u6587\u4EF6 <a href="https://blog.csdn.net/qq_20156289/article/details/109465873" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_20156289/article/details/109465873</a></p></li></ul>`,34),c=[p];function o(d,r,i,t,y,m){return n(),a("div",null,c)}var h=s(e,[["render",o]]);export{v as __pageData,h as default};
