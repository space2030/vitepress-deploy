import{_ as a,o as e,c as t,a as s}from"./app.2a154df8.js";const m=JSON.parse('{"title":"Maven","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5750\u6807\u5C5E\u6027","slug":"\u5750\u6807\u5C5E\u6027"},{"level":2,"title":"\u4F9D\u8D56\u4F18\u5148\u539F\u5219","slug":"\u4F9D\u8D56\u4F18\u5148\u539F\u5219"},{"level":2,"title":"\u5F00\u6E90\u9879\u76EE","slug":"\u5F00\u6E90\u9879\u76EE"}],"relativePath":"src/view/java/java-07-maven.md","lastUpdated":1697166270000}'),n={name:"src/view/java/java-07-maven.md"},o=s(`<h1 id="maven" tabindex="-1">Maven <a class="header-anchor" href="#maven" aria-hidden="true">#</a></h1><h2 id="\u5750\u6807\u5C5E\u6027" tabindex="-1">\u5750\u6807\u5C5E\u6027 <a class="header-anchor" href="#\u5750\u6807\u5C5E\u6027" aria-hidden="true">#</a></h2><p>Maven \u5750\u6807\u4E3A\u5404\u79CD\u7EC4\u4EF6\u5F15\u5165\u4E86\u79E9\u5E8F\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u5FC5\u987B\u660E\u786E\u5B9A\u4E49\u81EA\u5DF1\u7684\u5750\u6807\u3002</p><div class="language-xml"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">&lt;!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-parent --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">groupId</span><span style="color:#C9D1D9;">&gt;org.springframework.boot&lt;/</span><span style="color:#7EE787;">groupId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">artifactId</span><span style="color:#C9D1D9;">&gt;spring-boot-starter-parent&lt;/</span><span style="color:#7EE787;">artifactId</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">version</span><span style="color:#C9D1D9;">&gt;2.3.12.RELEASE&lt;/</span><span style="color:#7EE787;">version</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">type</span><span style="color:#C9D1D9;">&gt;pom&lt;/</span><span style="color:#7EE787;">type</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">dependency</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>\u540D\u79F0</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>groupId</code></td><td>\u5B9A\u4E49\u5F53\u524DMaven\u9879\u76EE\u96B6\u5C5E\u7684\u5B9E\u9645\u9879\u76EE-\u516C\u53F8\u540D\u79F0\uFF0Cjar \u5305\u6240\u5728\u4ED3\u5E93\u8DEF\u5F84\uFF0C\u7531\u4E8E Maven \u4E2D\u6A21\u5757\u7684\u6982\u5FF5\uFF0C\u56E0\u6B64\u4E00\u4E2A\u5B9E\u4F8B\u9879\u76EE\u5F80\u5F80\u4F1A\u88AB\u5212\u5206\u4E3A\u5F88\u591A\u6A21\u5757\u3002</td></tr><tr><td><code>artifactId</code></td><td>\u8BE5\u5143\u7D20\u5B9A\u4E49\u4E86\u5B9E\u9645\u9879\u76EE\u4E2D\u7684\u4E00\u4E2A Maven \u6A21\u5757-\u9879\u76EE\u540D\uFF0C\u63A8\u8350\u7684\u505A\u6CD5\u662F\u5B9E\u9645\u9879\u76EE\u540D\u79F0\u4F5C\u4E3A<code>artifactId</code>\u7684\u524D\u7F00\u3002</td></tr><tr><td><code>version</code></td><td>\u8BE5\u5143\u7D20\u5B9A\u4E49 Maven \u9879\u76EE\u5F53\u524D\u6240\u5904\u7684\u7248\u672C\u3002</td></tr><tr><td><code>type</code></td><td>\u4F9D\u8D56\u7684\u7C7B\u578B\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u58F0\u660E\uFF0C\u9ED8\u8BA4\u503C\u4E3A jar\u3002</td></tr><tr><td><code>scope</code></td><td>\u4F9D\u8D56\u8303\u56F4\uFF0Ccompile\uFF1A\u7F16\u8BD1\u4F9D\u8D56\u8303\u56F4\uFF08\u9ED8\u8BA4\uFF09\uFF0Ctest\uFF1A\u6D4B\u8BD5\u4F9D\u8D56\u8303\u56F4\uFF08\u5982\uFF1A<code>junit</code>\uFF09\uFF0Cprovided\uFF1A\u5DF2\u63D0\u4F9B\u4F9D\u8D56\u8303\u56F4\uFF08\u5982\uFF1A<code>servlet-api</code>\uFF09\uFF0Cruntime\uFF1A\u8FD0\u884C\u7684\u4F9D\u8D56\u8303\u56F4\uFF08\u5982\uFF1A<code>jdbc</code> \u9A71\u52A8\u7A0B\u5E8F\uFF09\uFF0Csystem\uFF1A\u7CFB\u7EDF\u4F9D\u8D56\u8303\u56F4\uFF08\u4E00\u822C\u4E0D\u4F7F\u7528\uFF09\u3002</td></tr><tr><td><code>optional</code></td><td>\u6807\u8BB0\u4F9D\u8D56\u662F\u5426\u53EF\u9009</td></tr><tr><td><code>exclusions</code></td><td>\u7528\u6765\u6392\u9664\u4F20\u9012\u6027\u4F9D\u8D56</td></tr></tbody></table><blockquote><p>\u7248\u672C</p><p>SNAPSHOT\uFF1A\u5FEB\u7167\uFF0C\u5F00\u53D1\u7248</p><p>alpha\uFF1A\u5185\u90E8\u6D4B\u8BD5</p><p>beta\uFF1A\u516C\u5F00\u6D4B\u8BD5</p><p>Release | RC\uFF1A\u53D1\u5E03\u7248</p><p>GA\uFF1A\u6B63\u5E38\u7248\u672C</p></blockquote><h2 id="\u4F9D\u8D56\u4F18\u5148\u539F\u5219" tabindex="-1">\u4F9D\u8D56\u4F18\u5148\u539F\u5219 <a class="header-anchor" href="#\u4F9D\u8D56\u4F18\u5148\u539F\u5219" aria-hidden="true">#</a></h2><blockquote><p><a href="https://zhuanlan.zhihu.com/p/83236129" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/83236129</a></p></blockquote><ol><li>\u4F9D\u8D56\u6700\u77ED\u8DEF\u5F84\u4F18\u5148\uFF1A\u4E00\u4E2A\u9879\u76EEDemo\u4F9D\u8D56\u4E86\u4E24\u4E2Ajar\u5305\uFF0C\u5176\u4E2DA-B-C-X(1.0) \uFF0C A-D-X(2.0)\u3002\u7531\u4E8EX(2.0)\u8DEF\u5F84\u6700\u77ED\uFF0C\u6240\u4EE5\u9879\u76EE\u4F7F\u7528\u7684\u662FX(2.0)\u3002</li><li>pom \u6587\u4EF6\u4E2D\u7533\u660E\u987A\u5E8F\u4F18\u5148\uFF1A\u5982\u679CA-B-X(1.0) \uFF0CA-C-X(2.0) \u8FD9\u6837\u7684\u8DEF\u5F84\u957F\u5EA6\u4E00\u6837\u600E\u4E48\u529E\u5462\uFF1F\u8FD9\u6837\u7684\u60C5\u51B5\u4E0B\uFF0Cmaven\u4F1A\u6839\u636Epom\u6587\u4EF6\u58F0\u660E\u7684\u987A\u5E8F\u52A0\u8F7D\uFF0C\u5982\u679C\u5148\u58F0\u660E\u4E86B\uFF0C\u540E\u58F0\u660E\u4E86C\uFF0C\u90A3\u5C31\u6700\u540E\u7684\u4F9D\u8D56\u5C31\u4F1A\u662FX(1.0)\u3002</li><li>\u8986\u76D6\u4F18\u5148\u539F\u5219\uFF1A\u5B50pom\u5185\u58F0\u660E\u7684\u4F18\u5148\u4E8E\u7236pom\u4E2D\u7684\u4F9D\u8D56\u3002</li></ol><h2 id="\u5F00\u6E90\u9879\u76EE" tabindex="-1">\u5F00\u6E90\u9879\u76EE <a class="header-anchor" href="#\u5F00\u6E90\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li>\u6253\u5305</li></ul><p><a href="https://gitee.com/cailiangchen/assembly-demo.git" target="_blank" rel="noopener noreferrer">https://gitee.com/cailiangchen/assembly-demo.git</a></p>`,12),l=[o];function p(r,c,d,i,h,y){return e(),t("div",null,l)}var g=a(n,[["render",p]]);export{m as __pageData,g as default};