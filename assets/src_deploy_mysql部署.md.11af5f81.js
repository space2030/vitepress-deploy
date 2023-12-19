import{_ as s,o as a,c as l,a as n}from"./app.2a154df8.js";const h=JSON.parse('{"title":"install mysql-5.7.35","description":"","frontmatter":{},"headers":[{"level":2,"title":"download","slug":"download"},{"level":2,"title":"before","slug":"before"},{"level":2,"title":"upload & install","slug":"upload-install"},{"level":2,"title":"conf","slug":"conf"},{"level":2,"title":"start","slug":"start"},{"level":2,"title":"restart","slug":"restart"},{"level":2,"title":"sign in","slug":"sign-in"},{"level":2,"title":"remote","slug":"remote"},{"level":2,"title":"reference","slug":"reference"},{"level":2,"title":"mysql \u672C\u5730\u90E8\u7F72","slug":"mysql-\u672C\u5730\u90E8\u7F72"},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u5176\u4ED6\u547D\u4EE4","slug":"\u5176\u4ED6\u547D\u4EE4"},{"level":3,"title":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF"}],"relativePath":"src/deploy/mysql\u90E8\u7F72.md","lastUpdated":1697420719000}'),p={name:"src/deploy/mysql\u90E8\u7F72.md"},e=n(`<h1 id="install-mysql-5-7-35" tabindex="-1">install mysql-5.7.35 <a class="header-anchor" href="#install-mysql-5-7-35" aria-hidden="true">#</a></h1><h2 id="download" tabindex="-1">download <a class="header-anchor" href="#download" aria-hidden="true">#</a></h2><p><a href="http://mirrors.ustc.edu.cn/mysql-ftp/Downloads/MySQL-5.7/" target="_blank" rel="noopener noreferrer">mysql\u955C\u50CF\u4E0B\u8F7D</a></p><blockquote><p>\u955C\u50CF\u7F51\u7AD9\u4E0B\u8F7D\u7248\u672C\uFF1Amysql-5.7.37-el7-x86_64.tar.gz</p></blockquote><h2 id="before" tabindex="-1">before <a class="header-anchor" href="#before" aria-hidden="true">#</a></h2><ul><li>\u68C0\u6D4B\u7CFB\u7EDF\u662F\u5426\u81EA\u5E26mysql</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost /]</span><span style="color:#8B949E;"># rpm -qa | grep mysql</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u662F\uFF0C\u5219\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u5220\u9664\uFF1A</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost /]</span><span style="color:#8B949E;"># rpm -e --nodeps \u2018\u4E0A\u4E00\u6B65\u67E5\u627E\u7684\u540D\u79F0\u2019</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5220\u9664\u6210\u529F\u540E\uFF0C\u67E5\u8BE2\u6240\u6709Mysql\u5BF9\u5E94\u7684\u6587\u4EF6\u5939</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost </span><span style="color:#FF7B72;">~</span><span style="color:#C9D1D9;">]</span><span style="color:#8B949E;"># whereis mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">mysql: /usr/bin/mysql /usr/local/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost </span><span style="color:#FF7B72;">~</span><span style="color:#C9D1D9;">]</span><span style="color:#8B949E;"># find / -name mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/run/lock/subsys/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/etc/rc.d/init.d/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/bin/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/local/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/local/mysql/bin/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/local/mysql/include/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">/usr/local/mysql/data/mysql</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u5220\u9664\u4E0A\u9762\u67E5\u627E\u7684\u6240\u6709\u6587\u4EF6\u5939</p><p>rm -rf *</p></div><h2 id="upload-install" tabindex="-1">upload &amp; install <a class="header-anchor" href="#upload-install" aria-hidden="true">#</a></h2><ul><li>\u4E0A\u4F20\u5230\u76EE\u5F55</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost </span><span style="color:#FF7B72;">~</span><span style="color:#C9D1D9;">]</span><span style="color:#8B949E;"># cd /usr/local/</span></span>
<span class="line"></span></code></pre></div><ul><li>\u89E3\u538B</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># tar -zxvf mysql-5.7.37-el7-x86_64.tar.gz </span></span>
<span class="line"></span></code></pre></div><ul><li>\u4FEE\u6539\u89E3\u538B\u76EE\u5F55\u540D\u79F0</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># mv mysql-5.7.37-el7-x86_64/ mysql</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5728/usr/local/mysql\u76EE\u5F55\u4E0B\u521B\u5EFAdata\u76EE\u5F55</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># mkdir mysql/data</span></span>
<span class="line"></span></code></pre></div><ul><li>\u68C0\u67E5mysql\u7528\u6237\u7EC4\u548C\u7528\u6237\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u521B\u5EFA</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># cat /etc/group | grep mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># cat /etc/passwd | grep mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># groupadd mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># useradd -r -g mysql mysql</span></span>
<span class="line"></span></code></pre></div><ul><li>\u66F4\u6539mysql\u76EE\u5F55\u4E0B\u6240\u5C5E\u7684\u7528\u6237\u7EC4\u548C\u7528\u6237\uFF0C\u4EE5\u53CA\u6743\u9650</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># chown -R mysql:mysql /usr/local/mysql/</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># chmod -R 755 /usr/local/mysql</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7F16\u8BD1\u5B89\u88C5\u5E76\u521D\u59CB\u5316mysql</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># cd mysql/bin/</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># ./mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data/ --basedir=/usr/local/mysql/</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u5E76\u5B89\u88C5libaio\u5305</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># rmp -qa|grep libaio</span></span>
<span class="line"><span style="color:#C9D1D9;">-bash: rmp: </span><span style="color:#79C0FF;">command</span><span style="color:#C9D1D9;"> not found</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># yum -y install libaio-devel.x86_64</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4E3A\u51FA\u73B0\u521D\u59CB\u5BC6\u7801\uFF0C\u53EF\u518D\u6B21\u521D\u59CB\u5316</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost local]</span><span style="color:#8B949E;"># cd mysql/bin/</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># ./mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data/ --basedir=/usr/local/mysql/</span></span>
<span class="line"></span></code></pre></div></div><h2 id="conf" tabindex="-1">conf <a class="header-anchor" href="#conf" aria-hidden="true">#</a></h2><ul><li>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6my.cnf</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># vi /etc/my.cnf</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6DFB\u52A0\u914D\u7F6E\u5982\u4E0B</li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">[mysqld]</span></span>
<span class="line"><span style="color:#c9d1d9;">datadir=/usr/local/mysql/data</span></span>
<span class="line"><span style="color:#c9d1d9;">port=3306</span></span>
<span class="line"><span style="color:#c9d1d9;"># Disabling symbolic-links is recommended to prevent assorted security risks</span></span>
<span class="line"><span style="color:#c9d1d9;">symbolic-links=0</span></span>
<span class="line"><span style="color:#c9d1d9;"># Settings user and group are ignored when systemd is used.</span></span>
<span class="line"><span style="color:#c9d1d9;"># If you need to run mysqld under a different user or group,</span></span>
<span class="line"><span style="color:#c9d1d9;"># customize your systemd unit file for mariadb according to the</span></span>
<span class="line"><span style="color:#c9d1d9;"># instructions in http://fedoraproject.org/wiki/Systemd</span></span>
<span class="line"><span style="color:#c9d1d9;">[mysqld_safe]</span></span>
<span class="line"><span style="color:#c9d1d9;">log-error=/usr/local/mysql/data/mysql.log</span></span>
<span class="line"><span style="color:#c9d1d9;">pid-file=/usr/local/mysql/data/mysql.pid</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># /usr/local/mysql/support-files/mysql.server start</span></span>
<span class="line"></span></code></pre></div><h2 id="restart" tabindex="-1">restart <a class="header-anchor" href="#restart" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@ bin]</span><span style="color:#8B949E;"># </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">ln -s /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">[root@ bin]</span><span style="color:#8B949E;"># ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql</span></span>
<span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># service mysql restart</span></span>
<span class="line"><span style="color:#C9D1D9;">Shutting down MySQL.. SUCCESS</span><span style="color:#FF7B72;">!</span><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#C9D1D9;">Starting MySQL. SUCCESS</span><span style="color:#FF7B72;">!</span></span>
<span class="line"></span></code></pre></div><h2 id="sign-in" tabindex="-1">sign in <a class="header-anchor" href="#sign-in" aria-hidden="true">#</a></h2><ul><li>\u767B\u5F55mysql\uFF0C\u4FEE\u6539\u5BC6\u7801\u4E3A123456(\u767B\u5F55\u7684\u5BC6\u7801\u662F\u6B65\u9AA49\u4E2D\u521D\u59CB\u5316\u5BC6\u7801)</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[root@localhost bin]</span><span style="color:#8B949E;"># mysql -u root -p</span></span>
<span class="line"><span style="color:#C9D1D9;">Enter password:</span></span>
<span class="line"><span style="color:#C9D1D9;">mysql</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">set password </span><span style="color:#FF7B72;">for</span><span style="color:#C9D1D9;"> root@localhost = password(</span><span style="color:#A5D6FF;">&#39;123456&#39;</span><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6388\u6743</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">mysql</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">use mysql</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">msyql</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">update user </span><span style="color:#79C0FF;">set</span><span style="color:#C9D1D9;"> user.Host=</span><span style="color:#A5D6FF;">&#39;%&#39;</span><span style="color:#C9D1D9;"> where user.User=</span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">mysql</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">flush privileges</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="remote" tabindex="-1">remote <a class="header-anchor" href="#remote" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u4E91\u670D\u52A1\u5668</p><p>\u914D\u7F6E\u670D\u52A1\u5668\u5B89\u5168\u7EC4</p></div><h2 id="reference" tabindex="-1">reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><p><a href="https://cloud.tencent.com/developer/article/2080858" target="_blank" rel="noopener noreferrer">Linux\u4E0B\u5B89\u88C5mysql-5.7.30\u8BE6\u7EC6\u6B65\u9AA4</a></p><h2 id="mysql-\u672C\u5730\u90E8\u7F72" tabindex="-1">mysql \u672C\u5730\u90E8\u7F72 <a class="header-anchor" href="#mysql-\u672C\u5730\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h3><p><a href="https://blog.csdn.net/m0_62808124/article/details/126769669" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_62808124/article/details/126769669</a></p><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><p>mysql-8.0.30-winx64\u76EE\u5F55\u4E0B\u521B\u5EFAmy.ini\u6587\u4EF6</p><ul><li>my.ini\u6587\u4EF6\u5E38\u7528\u914D\u7F6E</li></ul><blockquote><p>\u8DEF\u5F84\u4F7F\u7528\u53CC\u659C\u6760\u6216\u8005\u53CD\u659C\u6760\uFF0C\u5426\u5219\u62A5\u9519</p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">[client]    </span><span style="color:#8B949E;">#\u5BA2\u6237\u7AEF\u8BBE\u7F6E\uFF0C\u5373\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u7684\u8FDE\u63A5\u53C2\u6570</span></span>
<span class="line"><span style="color:#8B949E;"># \u8BBE\u7F6Emysql\u5BA2\u6237\u7AEF\u8FDE\u63A5\u670D\u52A1\u7AEF\u65F6\u9ED8\u8BA4\u4F7F\u7528\u7684\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#C9D1D9;">port=3306</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;">#\u9ED8\u8BA4\u7F16\u7801</span></span>
<span class="line"><span style="color:#C9D1D9;">default-character-set = utf8mb4</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#C9D1D9;">[mysql]    </span><span style="color:#8B949E;">#\u5BA2\u6237\u7AEF\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#8B949E;">#MySQL \u63D0\u793A\u7B26\u914D\u7F6E</span></span>
<span class="line"><span style="color:#8B949E;">#\u7528\u6237\u540D@\u4E3B\u673A\u540D+mysql\u7248\u672C\u53F7+\u6570\u636E\u5E93\u540D</span></span>
<span class="line"><span style="color:#C9D1D9;">prompt=</span><span style="color:#79C0FF;">\\\\</span><span style="color:#C9D1D9;">u@</span><span style="color:#79C0FF;">\\\\</span><span style="color:#C9D1D9;">h </span><span style="color:#79C0FF;">\\\\</span><span style="color:#C9D1D9;">v [</span><span style="color:#79C0FF;">\\\\</span><span style="color:#C9D1D9;">d]</span><span style="color:#FF7B72;">&gt;</span><span style="color:#79C0FF;">\\\\</span><span style="color:#C9D1D9;">_</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># \u8BBE\u7F6Emysql\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u5B57\u7B26\u96C6</span></span>
<span class="line"><span style="color:#C9D1D9;">default-character-set = utf8mb4</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#C9D1D9;">[mysqld]    </span><span style="color:#8B949E;">#\u670D\u52A1\u7AEF\u57FA\u672C\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#8B949E;"># \u9ED8\u8BA4\u8FDE\u63A5\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#C9D1D9;">port=3306</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># MySQL\u5B89\u88C5\u6839\u76EE\u5F55\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#C9D1D9;">basedir=D:/Space/space-kit/kit-deploy/mysql-8.0.31-winx64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># MySQL\u6570\u636E\u7684\u5B58\u653E\u76EE\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">datadir=D:/Space/space-kit/kit-deploy/mysql-8.0.31-winx64/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5141\u8BB8\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">max_connections=200</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># \u5141\u8BB8\u8FDE\u63A5\u5931\u8D25\u7684\u6B21\u6570\u3002\u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u6709\u4EBA\u4ECE\u8BE5\u4E3B\u673A\u8BD5\u56FE\u653B\u51FB\u6570\u636E\u5E93\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#C9D1D9;">max_connect_errors=10</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;">#\u670D\u52A1\u7AEF\u9ED8\u8BA4\u7F16\u7801</span></span>
<span class="line"><span style="color:#C9D1D9;">character_set_server = utf8mb4</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;">#\u5728\u521B\u5EFA\u65B0\u8868\u65F6\u5C06\u4F7F\u7528\u7684\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE</span></span>
<span class="line"><span style="color:#C9D1D9;">default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#8B949E;"># \u914D\u7F6E\u65F6\u533A</span></span>
<span class="line"><span style="color:#C9D1D9;">default-time_zone=</span><span style="color:#A5D6FF;">&#39;+8:00&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="\u5176\u4ED6\u547D\u4EE4" tabindex="-1">\u5176\u4ED6\u547D\u4EE4 <a class="header-anchor" href="#\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">mysqld --install </span><span style="color:#A5D6FF;">&quot;MySQL&quot;</span><span style="color:#C9D1D9;"> --defaults-file=</span><span style="color:#A5D6FF;">&quot;D:\\Space\\space-kit\\kit-deploy\\mysql-8.0.31-winx64\\my.ini&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">mysqld --initialize --console</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u8BB0\u5F55\u968F\u673A\u5BC6\u7801</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">net start mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">mysql -uroot -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;123456&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">ALTER USER </span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#C9D1D9;">@</span><span style="color:#A5D6FF;">&#39;localhost&#39;</span><span style="color:#C9D1D9;"> IDENTIFIED BY </span><span style="color:#A5D6FF;">&#39;root&#39;</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9A8C\u8BC1\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u751F\u6548</span></span>
<span class="line"><span style="color:#79C0FF;">\\s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9000\u51FA</span></span>
<span class="line"><span style="color:#79C0FF;">\\q</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u9A8C\u8BC1\u5BC6\u7801</span></span>
<span class="line"><span style="color:#8B949E;">#mysql -uroot -hlocalhost -p123456</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">mysql -uroot -hlocalhost -proot</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p>MYSQL_HOME D:\\Space\\space-kit\\kit-deploy\\mysql-8.0.31-winx64</p><p>%MYSQL_HOME%\\bin</p><ul><li>\u9A8C\u8BC1\u914D\u7F6E</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">mysql --version</span></span>
<span class="line"></span></code></pre></div>`,63),o=[e];function c(r,t,i,y,d,D){return a(),l("div",null,o)}var m=s(p,[["render",c]]);export{h as __pageData,m as default};
