import{_ as a,o as s,c as l,a as e}from"./app.2a154df8.js";const y=JSON.parse('{"title":"Gateway \u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F51\u5173\u5B9A\u4E49","slug":"\u7F51\u5173\u5B9A\u4E49"},{"level":2,"title":"\u7F51\u5173\u4F5C\u7528","slug":"\u7F51\u5173\u4F5C\u7528"}],"relativePath":"src/view/java/java-12-gateway.md","lastUpdated":1697420864000}'),n={name:"src/view/java/java-12-gateway.md"},t=e(`<h1 id="gateway-\u539F\u7406" tabindex="-1">Gateway \u539F\u7406 <a class="header-anchor" href="#gateway-\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="\u7F51\u5173\u5B9A\u4E49" tabindex="-1">\u7F51\u5173\u5B9A\u4E49 <a class="header-anchor" href="#\u7F51\u5173\u5B9A\u4E49" aria-hidden="true">#</a></h2><ul><li>\u6321\u5728\u4F17\u591A\u5FAE\u670D\u52A1\u524D\u9762\u7684\u4E00\u5835\u5899\uFF0C\u7528\u6765\u7BA1\u7406\u3001\u6388\u6743\u3001\u6D41\u91CF\u9650\u5236\u7B49\u7B49</li><li>\u4FDD\u62A4\u540E\u53F0\u7684\u5FAE\u670D\u52A1\uFF0C</li><li>Spring Cloud Gateway\u65E8\u5728\u4E3A\u5FAE\u670D\u52A1\u67B6\u6784\u63D0\u4F9B\u4E00\u79CD\u7B80\u5355\u800C\u6709\u6548\u7684\u7EDF\u4E00\u7684API\u8DEF\u7531\u7BA1\u7406\u65B9\u5F0F\u3002</li><li>Spring Cloud Gateway\u4F5C\u4E3ASpring Cloud\u751F\u6001\u7CFB\u4E2D\u7684\u7F51\u5173\uFF0C\u76EE\u6807\u662F\u4EE3\u66FFzuul\uFF0C</li><li>\u5176\u4E0D\u4EC5\u63D0\u4F9B\u7EDF\u4E00\u7684\u8DEF\u7531\u65B9\u5F0F\uFF0C\u5E76\u4E14\u57FA\u4E8EFilter\u94FE\u7684\u65B9\u5F0F\u63D0\u4F9B\u4E86\u7F51\u5173\u57FA\u672C\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\uFF1A\u5B89\u5168\u3001\u76D1\u63A7/\u57CB\u70B9\u3001\u9650\u6D41\u7B49\u7B49\u3002</li></ul><h2 id="\u7F51\u5173\u4F5C\u7528" tabindex="-1">\u7F51\u5173\u4F5C\u7528 <a class="header-anchor" href="#\u7F51\u5173\u4F5C\u7528" aria-hidden="true">#</a></h2><ol><li>\u4F5C\u4E3A\u6240\u6709\u5FAE\u670D\u52A1\u7684\u8BF7\u6C42\u5165\u53E3</li><li>\u5BF9\u6240\u6709\u7684API\u8FDB\u884C\u7EDF\u4E00\u7684\u7BA1\u7406\u3001\u5206\u53D1</li><li>\u4F5C\u4E3A\u6240\u6709\u540E\u7AEF\u670D\u52A1\u7684\u805A\u5408\u70B9</li></ol><div class="tip custom-block"><p class="custom-block-title">\u7F51\u5173\u51E0\u4E2A\u91CD\u8981\u7684\u6982\u5FF5</p><ol start="5"><li>Route\uFF08\u8DEF\u7531\uFF09\uFF1A\u662F\u7F51\u5173\u7684\u57FA\u672C\u6784\u5EFA\u6A21\u5757\uFF0C\u7531\u4E00\u4E2AID\u3001\u4E00\u4E2A\u76EE\u6807URI\u3001\u4E00\u7EC4\u65AD\u8A00\u3001\u4E00\u7EC4\u8FC7\u6EE4\u5668\u5B9E\u73B0\u3002\u5982\u679C\u65AD\u8A00\u4E3A\u771F\uFF0C\u5219\u4F1A\u8DEF\u7531\u81F3\u6307\u5B9A\u7684\u670D\u52A1\u4E2D\u3002</li><li>Predicate\uFF08\u65AD\u8A00\uFF09\uFF1A\u5373\u4E00\u79CD\u5339\u914D\u89C4\u5219\uFF0C\u53EF\u4EE5\u6839\u636E\u591A\u79CD\u60C5\u51B5\u8FDB\u884C\u5339\u914D\uFF0C\u6211\u6700\u5E38\u7528\u7684\u662F\u6839\u636Epath\u6216\u8005Host\u8FDB\u884C\u5339\u914D\u3002</li><li>Filter\uFF08\u8FC7\u6EE4\u5668\uFF09\uFF1A\u8D1F\u8D23\u5BF9\u8FC7\u6765\u7684\u8BF7\u6C42\u6309\u7167\u67D0\u79CD\u89C4\u5219\u8FDB\u884C\u4FEE\u6539</li></ol></div><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;"> gateway:</span></span>
<span class="line"><span style="color:#c9d1d9;">   routes:</span></span>
<span class="line"><span style="color:#c9d1d9;">     - id: product_route</span></span>
<span class="line"><span style="color:#c9d1d9;">   uri: lb://mall-product</span></span>
<span class="line"><span style="color:#c9d1d9;">   predicates:</span></span>
<span class="line"><span style="color:#c9d1d9;">      # \u6839\u636Epath\u8FDB\u884C\u5339\u914D</span></span>
<span class="line"><span style="color:#c9d1d9;">      - Path=/api/product/**</span></span>
<span class="line"><span style="color:#c9d1d9;">      # \u6839\u636Ehost\u8FDB\u884C\u5339\u914D\uFF0C\u53EF\u4EE5\u4E00\u6B21\u5339\u914D\u591A\u4E2Ahost</span></span>
<span class="line"><span style="color:#c9d1d9;">      - Host=catmall.com, item.catmall.com</span></span>
<span class="line"><span style="color:#c9d1d9;">   filters:</span></span>
<span class="line"><span style="color:#c9d1d9;">     - RewritePath=/api/(?&lt;segment&gt;.*),/$\\{segment}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div>`,7),c=[t];function i(p,o,d,r,h,_){return s(),l("div",null,c)}var m=a(n,[["render",i]]);export{y as __pageData,m as default};
