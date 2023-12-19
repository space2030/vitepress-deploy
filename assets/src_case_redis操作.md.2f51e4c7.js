import{_ as s,o as n,c as a,a as l}from"./app.2a154df8.js";const d=JSON.parse('{"title":"redis \u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 \u6570\u636E\u7ED3\u6784","slug":"_01-\u6570\u636E\u7ED3\u6784"},{"level":2,"title":"02 \u901A\u7528\u6307\u4EE4","slug":"_02-\u901A\u7528\u6307\u4EE4"},{"level":2,"title":"03 value\u4E3Astring\u7C7B\u578B","slug":"_03-value\u4E3Astring\u7C7B\u578B"},{"level":2,"title":"04 value\u4E3Alist\u7C7B\u578B","slug":"_04-value\u4E3Alist\u7C7B\u578B"},{"level":2,"title":"05 value\u4E3Aset\u7C7B\u578B","slug":"_05-value\u4E3Aset\u7C7B\u578B"},{"level":2,"title":"06 value\u4E3Azset\uFF08sorted set\uFF09\u7C7B\u578B","slug":"_06-value\u4E3Azset\uFF08sorted-set\uFF09\u7C7B\u578B"},{"level":2,"title":"07 spring boot redis","slug":"_07-spring-boot-redis"}],"relativePath":"src/case/redis\u64CD\u4F5C.md","lastUpdated":1697420719000}'),p={name:"src/case/redis\u64CD\u4F5C.md"},e=l(`<h1 id="redis-\u64CD\u4F5C" tabindex="-1">redis \u64CD\u4F5C <a class="header-anchor" href="#redis-\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="_01-\u6570\u636E\u7ED3\u6784" tabindex="-1">01 \u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#_01-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h2><ul><li>String \u4E8C\u8FDB\u5236\u5B89\u5168\uFF0C\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u6570\u636E\uFF0C\u6BD4\u5982jpg\u56FE\u7247\u6216\u8005\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u952E\u6700\u5927\u80FD\u5B58\u50A8512M</li><li>Hash \u5B57\u5178\uFF0C\u952E\u503C\u5BF9\u96C6\u5408\uFF0C\u5373\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684Map\u7C7B\u578B\uFF0C\u9002\u5408\u5B58\u50A8\u5BF9\u8C61\uFF0C\u5E76\u4E14\u53EF\u4EE5\u50CF\u6570\u636E\u5E93\u4E2Dupdate\u4E00\u4E2A\u5C5E\u6027\u4E00\u6837\u53EA\u4FEE\u6539\u67D0\u4E00\u9879\u5C5E\u6027\u503C\uFF0CMemcached\u4E2D\u9700\u8981\u53D6\u51FA\u6574\u4E2A\u5B57\u7B26\u4E32\u53CD\u5E8F\u5217\u5316\u6210\u5BF9\u8C61\u4FEE\u6539\u5B8C\u518D\u5E8F\u5217\u5316\u5B58\u56DE\u53BB\uFF0C\u573A\u666F\u5B58\u50A8\uFF0C\u8BFB\u53D6\uFF0C\u4FEE\u6539\u7528\u6237\u5C5E\u6027</li><li>List \u94FE\u8868\uFF08\u53CC\u5411\u94FE\u8868\uFF09\uFF0C\u589E\u5220\u5FEB\uFF0C\u63D0\u4F9B\u4E86\u64CD\u4F5C\u67D0\u4E00\u6BB5\u5143\u7D20\u7684API\uFF0C\u573A\u666F\u6700\u65B0\u6D88\u606F\u6392\u884C\uFF0C\u6D88\u606F\u961F\u5217</li><li>Set \u96C6\u5408\uFF0C\u54C8\u5E0C\u8868\u5B9E\u73B0\uFF0C\u5143\u7D20\u4E0D\u91CD\u590D\uFF0C\u7279\u6027\uFF0C\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u67E5\u627E\u7684\u590D\u6742\u5EA6\u90FD\u662FO(1)\uFF0C\u4E3A\u96C6\u5408\u63D0\u4F9B\u4E86\u6C42\u4EA4\u96C6\uFF0C\u5E76\u96C6\uFF0C\u5DEE\u96C6\u7B49\u64CD\u4F5C\uFF0C\u573A\u666F\uFF0C\u5171\u540C\u597D\u53CB\uFF0C\u5229\u7528\u552F\u4E00\u6027\u7EDF\u8BA1\u8BBF\u95EE\u7F51\u7AD9\u7684\u6240\u6709\u72EC\u7ACBIP\uFF0C\u597D\u53CB\u63A8\u8350\u65F6\uFF0C\u6839\u636Etag\u6C42\u4EA4\u96C6\uFF0C\u5927\u4E8E\u67D0\u4E2A\u9608\u503C\u5C31\u53EF\u4EE5\u63A8\u8350</li><li>Sorted Set \u6709\u5E8F\u96C6\u5408\uFF0C\u5C06Set\u4E2D\u5143\u7D20\u589E\u52A0\u4E00\u4E2A\u6743\u91CD\u53C2\u6570score\uFF0C\u5143\u7D20\u6309score\u6709\u5E8F\u6392\u5217\uFF0C\u6570\u636E\u63D2\u5165\u96C6\u5408\u65F6\uFF0C\u5DF2\u7ECF\u8FDB\u884C\u5929\u7136\u6392\u5E8F\uFF0C\u573A\u666F\uFF0C\u6392\u884C\u699C\uFF0C\u5E26\u6743\u91CD\u7684\u6D88\u606F\u961F\u5217</li></ul><h2 id="_02-\u901A\u7528\u6307\u4EE4" tabindex="-1">02 \u901A\u7528\u6307\u4EE4 <a class="header-anchor" href="#_02-\u901A\u7528\u6307\u4EE4" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u6240\u6709key</span></span>
<span class="line"><span style="color:#C9D1D9;">key</span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6E05\u7A7A\u6570\u636E\u5E93\u5E76\u6267\u884C\u6301\u4E45\u5316\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C9D1D9;">flushall</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6E05\u7A7A\u6570\u636E\u5E93\uFF0C\u4F46\u662F\u4E0D\u6267\u884C\u6301\u4E45\u5316\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C9D1D9;">flushdb</span></span>
<span class="line"></span></code></pre></div><h2 id="_03-value\u4E3Astring\u7C7B\u578B" tabindex="-1">03 value\u4E3Astring\u7C7B\u578B <a class="header-anchor" href="#_03-value\u4E3Astring\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u8BBE\u7F6E\u503C\uFF08\u91CD\u590Dset\u540C\u4E00\u4E2Akey,\u4F1A\u8986\u76D6\u539F\u6765\u7684value\uFF09</span></span>
<span class="line"><span style="color:#79C0FF;">set</span><span style="color:#C9D1D9;"> key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">get key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u5220\u9664key</span></span>
<span class="line"><span style="color:#C9D1D9;">del key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6279\u91CF\u63D2\u5165</span></span>
<span class="line"><span style="color:#C9D1D9;">mset key1 value2 key2 value2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#value\u81EA\u589E</span></span>
<span class="line"><span style="color:#C9D1D9;">incr key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#value\u81EA\u51CF</span></span>
<span class="line"><span style="color:#C9D1D9;">decr key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6307\u5B9A\u589E\u52A0\u591A\u5C11</span></span>
<span class="line"><span style="color:#C9D1D9;">incrby key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u6307\u5B9A\u51CF\u5C11\u591A\u5C11</span></span>
<span class="line"><span style="color:#C9D1D9;">decrby key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\u83B7\u53D6\u539F\u6765\u7684\u503C\u5E76\u8BBE\u7F6E\u65B0\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">getset key newValue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6value\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">strlen key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#key\u503C\u5B58\u5728\u5219\u5728key\u5BF9\u5E94\u7684value\u540E\u9762\u8FFD\u52A0\u5B57\u7B26\uFF0C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA</span></span>
<span class="line"><span style="color:#C9D1D9;">append key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u90E8\u5206value\u503C\uFF08\u5DE6\u53F3\u5305\u542B\uFF0C\u7B97\u4E0B\u6807\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">getrange key start end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\u5982\u679Ckey\u5B58\u5728\u5C31\u4E0D\u8BBE\u7F6E\u503C\uFF0C\u8FD4\u56DE0\uFF0C\u5982\u679C\u4E0D\u5B58\u5728key\u5C31\u8BBE\u7F6E\u503C\uFF0C\u8FD4\u56DE1</span></span>
<span class="line"><span style="color:#C9D1D9;">setnx key value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\u4E3Akey\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF08\u8BE5\u8FC7\u7A0B\u4E0D\u662F\u539F\u5B50\u6027\u64CD\u4F5C\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">expire key +\u65F6\u95F4s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770Bkey\u8FC7\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#C9D1D9;">ttl key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\u539F\u5B50\u64CD\u4F5C\u521B\u5EFAkey\u5E76\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF08\u91CD\u590Dset\u540C\u4E00\u4E2Akey,\u4F1A\u8986\u76D6\u539F\u6765\u7684value\uFF0C\u5237\u65B0\u8FC7\u671F\u65F6\u95F4\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">setex key seconds value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u8BBE\u7F6E\u503C\uFF0C\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2Afield,value\uFF08\u540C\u4E00\u4E2Akey\u548Cfield\u518D\u6B21hset\u4F1A\u8986\u76D6\u4E4B\u524D\u7684value\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">hset key field value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u503C\uFF0C\u9996\u5148\u5236\u5B9Akey,\u7136\u540E\u6307\u5B9A\u83B7\u53D6\u8BE5key\u7684\u54EA\u4E2A\u5C5E\u6027</span></span>
<span class="line"><span style="color:#C9D1D9;">hget key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u8BBE\u7F6E\u591A\u4E2A\u5C5E\u6027\uFF0C\u4E0Ehset\u7C7B\u4F3C</span></span>
<span class="line"><span style="color:#C9D1D9;">hmset key field1 value1 field2 value2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">hset\uFF1A\u5982\u679Cfield\u662F\u54C8\u5E0C\u8868\u4E2D\u7684\u4E00\u4E2A\u65B0\u5EFA\u57DF\uFF0C\u5E76\u4E14\u503C\u8BBE\u7F6E\u6210\u529F\uFF0C\u8FD4\u56DE1\uFF0C\u5982\u679C\u54C8\u5E0C\u8868\u4E2D\u57DFfield\u5DF2\u7ECF\u5B58\u5728\u4E14\u65E7\u503C\u5DF2\u88AB\u65B0\u503C\u8986\u76D6\uFF0C\u8FD4\u56DE0</span></span>
<span class="line"><span style="color:#C9D1D9;">hmset\uFF1A\u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C\u8FD4\u56DEok\uFF0C\u5F53key\u4E0D\u662F\u54C8\u5E0C\u8868\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u591A\u4E2A\u5C5E\u6027\u7684\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">hmget key field1 field2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6key\u7684\u6240\u6709\u5C5E\u6027\u4E0E\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">hgetall key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6key\u4E2D\u5C5E\u6027\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">hlen key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u5220\u9664key\u4E2D\u67D0\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u5220\u9664\u591A\u4E2A</span></span>
<span class="line"><span style="color:#C9D1D9;">hdel key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u539Fkey\u7684field\u4E0D\u5B58\u5728\u5219set\u6210\u529F\uFF0C\u8FD4\u56DE1\uFF0C\u5426\u5219\u5931\u8D25\uFF0C\u8FD4\u56DE0</span></span>
<span class="line"><span style="color:#C9D1D9;">hsetnx key field value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u5F53\u524Dkey\u4E0B\u6240\u6709\u7684field</span></span>
<span class="line"><span style="color:#C9D1D9;">hkeys key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6\u6240\u6709\u7684value\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">hvals key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u5224\u65ADkey\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u4E2Afield</span></span>
<span class="line"><span style="color:#C9D1D9;">hexists key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u4E3Akey\u4E2Dfield\u503C\u57FA\u7840\u4E0A\u589E\u52A0step</span></span>
<span class="line"><span style="color:#C9D1D9;">hincrby key field step</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u4E3Akey\u4E2Dfield\u503C\u57FA\u7840\u4E0A\u589E\u52A0step(\u5C0F\u6570)</span></span>
<span class="line"><span style="color:#C9D1D9;">hincrbyfloat key field step</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6key\u5BF9\u5E94\u7684value\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">hstrlen key field</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#C9D1D9;">expire key second</span></span>
<span class="line"></span></code></pre></div><h2 id="_04-value\u4E3Alist\u7C7B\u578B" tabindex="-1">04 value\u4E3Alist\u7C7B\u578B <a class="header-anchor" href="#_04-value\u4E3Alist\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u4ECE\u94FE\u8868\u5DE6\u8FB9\uFF08\u94FE\u8868\u5934\uFF09\u653E\u6570\u636E</span></span>
<span class="line"><span style="color:#C9D1D9;">lpush key value [value ...]</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B[start,end]\u4E2D\u7684\u6570\u636E\uFF0Cend-1\u8868\u793A\u6700\u540E</span></span>
<span class="line"><span style="color:#C9D1D9;">lrange key start end</span></span>
<span class="line"><span style="color:#8B949E;">#\u53F3\u8FB9\u63D2\u5165\u6570\u636E</span></span>
<span class="line"><span style="color:#C9D1D9;">rpush key value [value ...]</span></span>
<span class="line"><span style="color:#8B949E;">#\u5F39\u51FA\u5DE6\u8FB9\u7B2C\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">lpop key</span></span>
<span class="line"><span style="color:#8B949E;">#\u5F39\u51FA\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">rpop key</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u94FE\u8868\u603B\u957F\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">llen key</span></span>
<span class="line"><span style="color:#8B949E;">#\u5DE6\u4FA7\u963B\u585E\u5F0F\u5F39\u51FA</span></span>
<span class="line"><span style="color:#C9D1D9;">blpop key [key...] timeout</span></span>
<span class="line"><span style="color:#8B949E;">#\u53F3\u4FA7\u963B\u585E\u5F0F\u5F39\u51FA</span></span>
<span class="line"><span style="color:#C9D1D9;">brpop key [key...] timeout</span></span>
<span class="line"><span style="color:#8B949E;">#\u4E0Elpush\u7C7B\u4F3C\uFF0C\u4F46\u662Flpushx\u4F1A\u6821\u9A8Ckey\u662F\u5426\u5B58\u5728\uFF0C\u82E5key\u4E0D\u5B58\u5728\u5219\u4E0D\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C9D1D9;">lpushx</span></span>
<span class="line"><span style="color:#8B949E;">#\u4E0Erpush\u7C7B\u4F3C\uFF0C\u4F46\u662Frpushx\u4F1A\u6821\u9A8Ckey\u662F\u5426\u5B58\u5728\uFF0C\u82E5key\u4E0D\u5B58\u5728\u5219\u4E0D\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C9D1D9;">rpushx</span></span>
<span class="line"><span style="color:#8B949E;">#\u5F39\u51FAkey1\u7684\u53F3\u8FB9\u7684\u5143\u7D20\uFF0C\u653E\u5165key2\u5DE6\u8FB9</span></span>
<span class="line"><span style="color:#C9D1D9;">rpoplpush key1 key2</span></span>
<span class="line"><span style="color:#8B949E;">#\u963B\u585E\u7248\u672C</span></span>
<span class="line"><span style="color:#C9D1D9;">brpoplpush</span></span>
<span class="line"><span style="color:#8B949E;">#\u83B7\u53D6key\u4E2Dindex\u4F4D\u7F6E\u7684\u503C\uFF0C\u8D1F\u6570\u5C31\u53CD\u8FC7\u6765\u6570\uFF0C-1\u4E3A\u6700\u540E\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#C9D1D9;">lindex key index</span></span>
<span class="line"><span style="color:#8B949E;">#count &gt; 0 \u4ECE\u5DE6\u8FB9\u5220\u9664count\u4E2Avalue</span></span>
<span class="line"><span style="color:#8B949E;">#count &lt; 0 \u4ECE\u53F3\u8FB9\u5220\u9664count\u4E2Avalue</span></span>
<span class="line"><span style="color:#8B949E;">#count = 0 \u5220\u9664\u6240\u6709\u7684value</span></span>
<span class="line"><span style="color:#C9D1D9;">lrem key count value</span></span>
<span class="line"></span></code></pre></div><h2 id="_05-value\u4E3Aset\u7C7B\u578B" tabindex="-1">05 value\u4E3Aset\u7C7B\u578B <a class="header-anchor" href="#_05-value\u4E3Aset\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#set\u96C6\u5408\u4E2D\u6DFB\u52A0\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">sadd key element [element...]</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u96C6\u5408\u6240\u6709\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">smembers key</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u5143\u7D20\u662F\u5426\u5C5E\u4E8E\u8BE5\u96C6\u5408\uFF0C1\u5B58\u5728\uFF0C0\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#C9D1D9;">sismember key element</span></span>
<span class="line"><span style="color:#8B949E;">#\u5220\u9664\u96C6\u5408\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">srem key element [element...]</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u96C6\u5408\u5143\u7D20\u6570\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">scard key</span></span>
<span class="line"><span style="color:#8B949E;">#\u968F\u673A\u83B7\u53D6\u96C6\u5408\u4E2D\u67D0\u4E00\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#8B949E;">#n\u662F\u6B63\u6570\uFF1A\u8FD4\u56DEn\u4E2A\u4E0D\u91CD\u590D\u7684\u6570</span></span>
<span class="line"><span style="color:#8B949E;">#n\u662F\u8D1F\u6570\uFF1A\u8FD4\u56DEn\u4E2A\u53EF\u80FD\u91CD\u590D\u7684\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">srandmember key [n]</span></span>
<span class="line"><span style="color:#8B949E;">#\u9ED8\u8BA4\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u6216\u8005\u5F39\u51FA\u6307\u5B9A\u4E2A\u6570\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">spop key [n]</span></span>
<span class="line"><span style="color:#8B949E;">#\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6</span></span>
<span class="line"><span style="color:#C9D1D9;">sinter key1 key2...</span></span>
<span class="line"><span style="color:#8B949E;">#\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u96C6\u5408\u6709\u540E\u9762\u96C6\u5408\u90FD\u6CA1\u6709\u7684\u5143\u7D20\uFF08\u5DEE\u96C6\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">sdiff key1 key2 key3...</span></span>
<span class="line"><span style="color:#8B949E;">#\u6240\u6709\u96C6\u5408\u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#C9D1D9;">sunion key1 key2 key3 ...</span></span>
<span class="line"><span style="color:#8B949E;">#\u627E\u5230set1\u4E0Eset2\u7684\u4EA4\u96C6\u5B58\u653E\u5728set\u4E2D</span></span>
<span class="line"><span style="color:#C9D1D9;">sinterstore </span><span style="color:#79C0FF;">set</span><span style="color:#C9D1D9;"> set1 set2</span></span>
<span class="line"></span></code></pre></div><h2 id="_06-value\u4E3Azset\uFF08sorted-set\uFF09\u7C7B\u578B" tabindex="-1">06 value\u4E3Azset\uFF08sorted set\uFF09\u7C7B\u578B <a class="header-anchor" href="#_06-value\u4E3Azset\uFF08sorted-set\uFF09\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">#\u6DFB\u52A0\u5143\u7D20\uFF0C\u6BCF\u4E2A\u5143\u7D20\u90FD\u4F1A\u643A\u5E26\u4E00\u4E2A\u5206\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zadd key score member1 score member2</span></span>
<span class="line"><span style="color:#8B949E;">#\u6839\u636E\u4E0B\u6807\u67E5\u770B\u5143\u7D20\uFF0C\u9ED8\u8BA4\u5206\u6570\u5347\u5E8F\u6392\u5E8F</span></span>
<span class="line"><span style="color:#C9D1D9;">zrange key start end [withscores]</span></span>
<span class="line"><span style="color:#8B949E;">#\u7C7B\u4F3C\u4E0A\u9762\uFF0C\u53CD\u53D6</span></span>
<span class="line"><span style="color:#C9D1D9;">zrevrange key start end [withscores]</span></span>
<span class="line"><span style="color:#8B949E;">#\u53D6score1\u5230score2\u5206\u6570\u4E4B\u95F4\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">zrangebyscore key score1 score2</span></span>
<span class="line"><span style="color:#8B949E;">#\u53CD\u53D6</span></span>
<span class="line"><span style="color:#C9D1D9;">zrevrangebyscore key max min [withscores]</span></span>
<span class="line"><span style="color:#8B949E;">#\u5220\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">zrem key member</span></span>
<span class="line"><span style="color:#8B949E;">#\u4E2A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zcard key</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u67D0\u4E2A\u5143\u7D20\u7684\u5206\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zscore key member</span></span>
<span class="line"><span style="color:#8B949E;">#\u67E5\u770B\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u6392\u540D\uFF0C\u9ED8\u8BA4\u6309\u5206\u6570\u5347\u5E8F\uFF08\u6392\u540D\u4ECE0\u5F00\u59CB\u7684\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">zrank key member</span></span>
<span class="line"><span style="color:#8B949E;">#\u53CD\u6392\u540D</span></span>
<span class="line"><span style="color:#C9D1D9;">zrevrank key member</span></span>
<span class="line"><span style="color:#8B949E;">#\u4E3A\u67D0\u4E2A\u5143\u7D20\u52A0\u5206</span></span>
<span class="line"><span style="color:#C9D1D9;">zincrby increment member</span></span>
<span class="line"><span style="color:#8B949E;">#\u7EDF\u8BA1min\u5230max\u5206\u6570\u95F4\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zcount key min max</span></span>
<span class="line"><span style="color:#8B949E;">#\u6839\u636E\u5206\u6570\u6BB5\u5220\u9664</span></span>
<span class="line"><span style="color:#C9D1D9;">zremrangebyscore key min max</span></span>
<span class="line"><span style="color:#8B949E;">#\u6839\u636E\u6392\u540D\u5220\u9664</span></span>
<span class="line"><span style="color:#C9D1D9;">zremrangebyrank key start end</span></span>
<span class="line"><span style="color:#8B949E;">#\u8FD9\u91CCnumkeys\u8868\u793A\u9700\u8981\u505A\u4EA4\u96C6\u7684key\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zinterstore destination numkeys key[key...]</span></span>
<span class="line"><span style="color:#8B949E;">#\u8FD9\u91CCnumkeys\u4EE3\u8868\u9700\u8981\u505A\u5E76\u96C6\u7684key\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">zunionstore destination numkeys key[key...]</span></span>
<span class="line"></span></code></pre></div><h2 id="_07-spring-boot-redis" tabindex="-1">07 spring boot redis <a class="header-anchor" href="#_07-spring-boot-redis" aria-hidden="true">#</a></h2><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;org.springframework.boot&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;spring-boot-starter-data-redis&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;org.projectlombok&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;lombok&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;com.google.guava&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;guava&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;27.0.1-jre&lt;/</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#8B949E;">&lt;!--json\u5DE5\u5177--&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;com.fasterxml.jackson.core&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;jackson-core&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;2.9.8&lt;/</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;com.fasterxml.jackson.core&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;jackson-annotations&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;2.9.8&lt;/</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;com.fasterxml.jackson.core&lt;/</span><span style="color:#FFA198;font-style:italic;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;jackson-databind&lt;/</span><span style="color:#FFA198;font-style:italic;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;2.9.8&lt;/</span><span style="color:#FFA198;font-style:italic;">version</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#FFA198;font-style:italic;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">#application.properties\u6587\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#Redis\u6570\u636E\u5E93\u7D22\u5F15\uFF08\u9ED8\u8BA4\u4E3A0\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.database = 0</span></span>
<span class="line"><span style="color:#c9d1d9;">#Redis\u670D\u52A1\u5668\u5730\u5740\uFF0C\u5199\u4F60\u7684ip</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.host = 192.168.100.100</span></span>
<span class="line"><span style="color:#c9d1d9;">#Redis\u670D\u52A1\u5668\u8FDE\u63A5\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.port = 6379</span></span>
<span class="line"><span style="color:#c9d1d9;">#Redis\u670D\u52A1\u5668\u8FDE\u63A5\u5BC6\u7801\uFF08\u9ED8\u8BA4\u4E3A\u7A7A\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.password = </span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FDE\u63A5\u6C60\u6700\u5927\u8FDE\u63A5\u6570\uFF08\u4F7F\u7528\u8D1F\u503C\u8868\u793A\u6CA1\u6709\u9650\u5236\uFF0C\u7C7B\u4F3Cmysql\u7684\u8FDE\u63A5\u6C60\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.jedis.pool.max-active = 200</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FDE\u63A5\u6C60\u6700\u5927\u963B\u585E\u7B49\u5F85\u65F6\u95F4\uFF08\u4F7F\u7528\u8D1F\u503C\u8868\u793A\u6CA1\u6709\u9650\u5236\uFF09</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8868\u793A\u8FDE\u63A5\u6C60\u7684\u94FE\u63A5\u62FF\u5B8C\u4E86\uFF0C\u73B0\u5728\u53BB\u7533\u8BF7\u9700\u8981\u7B49\u5F85\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.jedis.pool.max-wait = -1</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FDE\u63A5\u6C60\u4E2D\u7684\u6700\u5927\u7A7A\u95F2\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.jedis.pool.max-idle = 10</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FDE\u63A5\u6C60\u4E2D\u7684\u6700\u5C0F\u7A7A\u95F2\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.jedis.popl.min-idle = 0</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\u53BB\u8FDE\u63A5redis\u670D\u52A1\u7AEF</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.redis.timeout = 6000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#druid</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.url = jdbc:mysql://192.168.100.100:3306/redis?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=GMT</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.driverClassName = com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.username = root</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.password = root</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6700\u5927\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.maxActive = 30</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6700\u5C0F\u8FDE\u63A5\u6570</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.minIdle = 5</span></span>
<span class="line"><span style="color:#c9d1d9;">#\u83B7\u5F97\u8FDE\u63A5\u7684\u6700\u5927\u7B49\u5F85\u65F6\u95F4</span></span>
<span class="line"><span style="color:#c9d1d9;">spring.druid.maxWait = 10000</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">#\u6307\u5B9Amybatis\u914D\u7F6E\u6587\u4EF6\u5730\u5740</span></span>
<span class="line"><span style="color:#c9d1d9;">mybatis.config-location = classpath:mybatis/mybatis-config.xml</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ul><li>\u914D\u7F6E\u7C7B</li></ul><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">package</span><span style="color:#C9D1D9;"> com.xmcc.redis.config;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#FF7B72;">Configuration</span></span>
<span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RedisConfig</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">    \u65B0\u5EFArestTemplate\u4EA4\u7ED9spring\u5BB9\u5668\u7BA1\u7406\uFF0Cspringboot\u5176\u5B9E\u5DF2\u7ECF\u81EA\u52A8\u6CE8\u5165\u4E86RedisTemplate,\u4F46\u662F\u6CDB\u578B\u662FRedisTemp&lt;Object,Object&gt;\uFF0C\u800C\u4E14\u6CA1\u6709\u6307\u5B9A\u5E8F\u5217\u5316\u7684\u65B9\u5F0F\uFF0C\u800C\u6211\u4EEC\u9700\u8981key\u90FD\u662Fstring\u7C7B\u578B\u7684\uFF0C\u907F\u514D\u9891\u7E41\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u6240\u4EE5\u91CD\u5199\uFF0C\u5F53\u624B\u52A8\u53BB\u6CE8\u5165\u4E00\u4E2ARedisTemplate\u540E\uFF0Cspringboot\u5C06\u4E0D\u4F1A\u81EA\u52A8\u6CE8\u5165\uFF0CRedisCOnnectionFactory:springboot\u81EA\u52A8\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u6CE8\u5165</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    @</span><span style="color:#FF7B72;">Bean</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> RedisTemplate&lt;</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">&gt; </span><span style="color:#D2A8FF;">redisTemplate</span><span style="color:#C9D1D9;">(RedisConnectionFactory </span><span style="color:#FFA657;">factory</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        RedisTemplate</span><span style="color:#FFA657;">&lt;</span><span style="color:#FF7B72;">String</span><span style="color:#FFA657;">,</span><span style="color:#FF7B72;">Object</span><span style="color:#FFA657;">&gt; </span><span style="color:#C9D1D9;">template</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> RedisTemplate&lt;&gt;();</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u8BBE\u7F6E\u8FDE\u63A5\u5DE5\u5382\uFF0C\u5DE5\u5382\u7528\u4E8E\u521B\u5EFA\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#C9D1D9;">        template.</span><span style="color:#D2A8FF;">setConnectionFactory</span><span style="color:#C9D1D9;">(factory);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">setSerializeConfig</span><span style="color:#C9D1D9;">(template,factory);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> template;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">    	\u4E3A\u4EC0\u4E48\u8981\u5E8F\u5217\u5316\uFF1F</span></span>
<span class="line"><span style="color:#8B949E;">    		\u5E8F\u5217\u5316\u80FD\u52A0\u5FEB\u7F51\u7EDC\u4F20\u8F93\uFF0C\u800C\u4E14redis\u7684value\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u5E0C\u671Bvalue\u653E\u5165\u4EFB\u610F\u7684\u6570\u636E\uFF0C\u5C31\u9700\u8981\u624B\u52A8\u53BB\u5E8F\u5217\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\u8FD9\u76F4\u63A5\u914D\u7F6E\u4E86\uFF0C\u4EE5\u540E\u4F20\u5165\u4EFB\u610Fvalue\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u81EA\u52A8\u5E8F\u5217\u5316\u3002</span></span>
<span class="line"><span style="color:#8B949E;">    		\u4E3E\u4F8B\uFF0C\u6211\u4EEC\u73B0\u5728\u60F3\u4FDD\u5B58\u4E00\u4E2Astudent\u5BF9\u8C61\u5230redis\uFF0C\u4F46\u662Fredis\u53EA\u80FD\u5B58\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u628A\u5BF9\u8C61\u901A\u8FC7json\u5DE5\u5177\u7C7B\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u518D\u53BB\u5B58\u5165\uFF0C\u5199\u4E86\u8FD9\u4E2A\u5C31\u4E0D\u9700\u8981\u8F6C\u4E86\uFF0C\u4F20\u5165student\u5BF9\u8C61\uFF0C\u5185\u90E8\u81EA\u52A8\u5E2E\u52A9\u6211\u4EEC\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002	</span></span>
<span class="line"><span style="color:#8B949E;">    */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setSerializeConfig</span><span style="color:#C9D1D9;">(RedisTemplate&lt;</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">&gt; </span><span style="color:#FFA657;">redisTemplate</span><span style="color:#C9D1D9;">, RedisConnectionFactory </span><span style="color:#FFA657;">redisConnectionFactory</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u8BBE\u7F6E\u8FDE\u63A5\u5DE5\u5382</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">setConnectionFactory</span><span style="color:#C9D1D9;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u5BF9\u5B57\u7B26\u4E32\u91C7\u53D6\u666E\u901A\u7684\u5E8F\u5217\u5316\u65B9\u5F0F\uFF0C\u9002\u7528\u4E8Ekey\u56E0\u4E3A\u6211\u4EEC\u4E00\u822C\u91C7\u53D6\u7B80\u5355\u5B57\u7B26\u4E32\u4F5C\u4E3Akey</span></span>
<span class="line"><span style="color:#C9D1D9;">        StringRedisSerializer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">stringRedisSerializer</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">StringRedisSerializer</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u666E\u901A\u7684String\u7C7B\u578B\u7684key\uFF0C\u91C7\u7528\u666E\u901A\u5E8F\u5217\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">serKeySerializer</span><span style="color:#C9D1D9;">(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u666E\u901Ahash\u7C7B\u578B\u7684key\u4E5F\u4F7F\u7528\u666E\u901A\u5E8F\u5217\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">setHashKeySerializer</span><span style="color:#C9D1D9;">(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u89E3\u51B3\u67E5\u8BE2\u7F13\u5B58\u8F6C\u6362\u5F02\u5E38\u7684\u95EE\u9898\uFF0Cspringboot\u81EA\u5E26\u7684jackson\u5E8F\u5217\u5316\uFF0C\u4F46\u4F1A\u6709\u4E00\u5B9A\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#C9D1D9;">        Jackson2JsonRedisSerializer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">jackson2JsonRedisSerializer</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Jackson2JsonRedisSerializer</span><span style="color:#C9D1D9;">(Object.class);</span></span>
<span class="line"><span style="color:#C9D1D9;">        ObjectMapper</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">om</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ObjectMapper</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">        om.</span><span style="color:#D2A8FF;">setVisibility</span><span style="color:#C9D1D9;">(PropertyAccessor.ALL,JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"><span style="color:#C9D1D9;">        om.</span><span style="color:#D2A8FF;">enableDefaultTyping</span><span style="color:#C9D1D9;">(ObjectMapper.DefaultTyping.NON_FINAL);</span></span>
<span class="line"><span style="color:#C9D1D9;">        jackson2JsonRedisSerializer.</span><span style="color:#D2A8FF;">serObjectMapper</span><span style="color:#C9D1D9;">(om);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u666E\u901A\u7684\u503C\u91C7\u7528jackson\u65B9\u5F0F\u81EA\u52A8\u5E8F\u5217\u5316</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">setValueSerializer</span><span style="color:#C9D1D9;">(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//hash\u7C7B\u578B\u7684\u503C\u4E5F\u91C7\u7528jackson\u65B9\u5F0F\u5E8F\u5217\u5316</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">setHashValueSerializer</span><span style="color:#C9D1D9;">(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u5C5E\u6027\u8BBE\u7F6E\u5B8C\u6210afterPropertiesSet\u5C31\u4F1A\u88AB\u8C03\u7528\uFF0C\u53EF\u4EE5\u5BF9\u8BBE\u7F6E\u4E0D\u6210\u529F\u7684\u505A\u4E00\u4E9B\u9ED8\u8BA4\u5904\u7406</span></span>
<span class="line"><span style="color:#C9D1D9;">        redisTemplate.</span><span style="color:#D2A8FF;">afterPropertiesSet</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">   </span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5DE5\u5177\u7C7B</li></ul><div class="language-java"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#FF7B72;">package</span><span style="color:#C9D1D9;"> com.xmcc.redis01.util;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> org.springframework.data.redis.core.RedisTemplate;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> org.springframework.stereotype.Component;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> org.springframework.util.CollectionUtils;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#FF7B72;">Component</span></span>
<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#FF7B72;">Slf4j</span></span>
<span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RedisUtils</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    @</span><span style="color:#FF7B72;">Autowired</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> RedisTemplate</span><span style="color:#FFA657;">&lt;</span><span style="color:#FF7B72;">String</span><span style="color:#FFA657;">,</span><span style="color:#FF7B72;">Object</span><span style="color:#FFA657;">&gt; </span><span style="color:#C9D1D9;">redisTemplate;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//get</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> Object </span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> key</span><span style="color:#FF7B72;">==</span><span style="color:#79C0FF;">null</span><span style="color:#FF7B72;">?</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(key);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//set</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,Object </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">try</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(key,value);</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        } </span><span style="color:#FF7B72;">catch</span><span style="color:#C9D1D9;"> (Exception </span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">            log.</span><span style="color:#D2A8FF;">error</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;redis set value exception:{}&quot;</span><span style="color:#C9D1D9;">,e);</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//setex</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setex</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,Object </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">expire</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">try</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(key,value,expire,TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        } </span><span style="color:#FF7B72;">catch</span><span style="color:#C9D1D9;"> (Exception </span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">expire</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">expire</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">try</span><span style="color:#C9D1D9;">{</span><span style="color:#8B949E;">//\u8FD9\u513F\u6CA1\u6709ops\u4EC0\u4E48\u7684\u662F\u56E0\u4E3A\u6BCF\u79CD\u6570\u636E\u7C7B\u578B\u90FD\u80FD\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#C9D1D9;">            redisTemplate.</span><span style="color:#D2A8FF;">expire</span><span style="color:#C9D1D9;">(key,expire,TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span><span style="color:#FF7B72;">catch</span><span style="color:#C9D1D9;"> (Exception </span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">            log.</span><span style="color:#D2A8FF;">error</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;redis set key expire exception:{}&quot;</span><span style="color:#C9D1D9;">,e);</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span><span style="color:#8B949E;"> \u83B7\u53D6key\u7684\u8FC7\u671F\u65F6\u95F4</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ttl</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">getExpire</span><span style="color:#C9D1D9;">(key);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">keys</span><span style="color:#8B949E;"> \u5220\u9664key \u53EF\u53D8\u53C2\u6570</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">del</span><span style="color:#C9D1D9;">(String ...</span><span style="color:#FFA657;">keys</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(keys</span><span style="color:#FF7B72;">!=</span><span style="color:#79C0FF;">null</span><span style="color:#FF7B72;">&amp;&amp;</span><span style="color:#C9D1D9;">keys.length</span><span style="color:#FF7B72;">&gt;</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">            redisTemplate.</span><span style="color:#D2A8FF;">delete</span><span style="color:#C9D1D9;">(CollectionUtils.</span><span style="color:#D2A8FF;">arrayToList</span><span style="color:#C9D1D9;">(keys));</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">step</span><span style="color:#8B949E;">  \u4F20\u5165\u6B63\u6570 \u5C31\u662F\u52A0\u591A\u5C11 \u4F20\u5165\u8D1F\u6570\u5C31\u662F\u51CF\u591A\u5C11</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">incrBy</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;">(key,step);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">value</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span><span style="color:#8B949E;">  \u5982\u679C\u8BE5key\u5B58\u5728\u5C31\u8FD4\u56DEfalse \u8BBE\u7F6E\u4E0D\u6210\u529F key\u4E0D\u5B58\u5728\u5C31\u8FD4\u56DEture\u8BBE\u7F6E\u6210\u529F</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setnx</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,Object </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">setIfAbsent</span><span style="color:#C9D1D9;">(key,value);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *  \u539F\u5B50\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">value</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">expire</span><span style="color:#8B949E;">  \u5728\u4E0A\u9762\u65B9\u6CD5\u52A0\u4E0A\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setnxAndExpire</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,Object </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">,</span><span style="color:#FF7B72;">long</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">expire</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">setIfAbsent</span><span style="color:#C9D1D9;">(key,value,expire,TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">value</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span><span style="color:#8B949E;">  \u5982\u679C\u8BE5key\u5B58\u5728\u5C31\u8FD4\u56DE\u4E4B\u524D\u7684value  \u4E0D\u5B58\u5728\u5C31\u8FD4\u56DEnull</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> Object </span><span style="color:#D2A8FF;">getAndSet</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">,Object </span><span style="color:#FFA657;">value</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">opsForValue</span><span style="color:#C9D1D9;">().</span><span style="color:#D2A8FF;">getAndSet</span><span style="color:#C9D1D9;">(key,value);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">    /**</span></span>
<span class="line"><span style="color:#8B949E;">     *</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#FFA657;">key</span></span>
<span class="line"><span style="color:#8B949E;">     * </span><span style="color:#FF7B72;">@return</span><span style="color:#8B949E;"> \u5224\u65ADkey\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#8B949E;">     */</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">hasKey</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> redisTemplate.</span><span style="color:#D2A8FF;">hasKey</span><span style="color:#C9D1D9;">(key);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div>`,21),o=[e];function c(t,r,y,i,D,F){return n(),a("div",null,o)}var B=s(p,[["render",c]]);export{d as __pageData,B as default};
