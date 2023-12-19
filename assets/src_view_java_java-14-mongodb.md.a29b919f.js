import{_ as a,o as e,c as l,a as i}from"./app.2a154df8.js";const p=JSON.parse('{"title":"MongoDB","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 \u5B9A\u4E49","slug":"_01-\u5B9A\u4E49"},{"level":2,"title":"02 \u4F18\u52BF","slug":"_02-\u4F18\u52BF"},{"level":2,"title":"03 \u96C6\u5408","slug":"_03-\u96C6\u5408"},{"level":2,"title":"04 \u6587\u6863","slug":"_04-\u6587\u6863"},{"level":2,"title":"05 \u6570\u636E\u6587\u4EF6\u5E9E\u5927","slug":"_05-\u6570\u636E\u6587\u4EF6\u5E9E\u5927"},{"level":2,"title":"06 \u542F\u52A8\u5907\u4EFD\u6545\u969C\u6062\u590D","slug":"_06-\u542F\u52A8\u5907\u4EFD\u6545\u969C\u6062\u590D"},{"level":2,"title":"07 \u5206\u7247","slug":"_07-\u5206\u7247"},{"level":2,"title":"08 moveChunk\u76EE\u5F55\u91CC\u7684\u65E7\u6587\u4EF6\u5220\u9664\uFF1F","slug":"_08-movechunk\u76EE\u5F55\u91CC\u7684\u65E7\u6587\u4EF6\u5220\u9664\uFF1F"},{"level":2,"title":"09 \u67E5\u770BMongo\u6B63\u5728\u4F7F\u7528\u7684\u8FDE\u63A5","slug":"_09-\u67E5\u770Bmongo\u6B63\u5728\u4F7F\u7528\u7684\u8FDE\u63A5"},{"level":2,"title":"10 MongoDB \u6027\u80FD\u4F18\u5316","slug":"_10-mongodb-\u6027\u80FD\u4F18\u5316"}],"relativePath":"src/view/java/java-14-mongodb.md","lastUpdated":1697591897000}'),o={name:"src/view/java/java-14-mongodb.md"},n=i(`<h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-hidden="true">#</a></h1><h2 id="_01-\u5B9A\u4E49" tabindex="-1">01 \u5B9A\u4E49 <a class="header-anchor" href="#_01-\u5B9A\u4E49" aria-hidden="true">#</a></h2><ol><li>\u4E00\u4E2A\u6587\u6863\u6570\u636E\u5E93\uFF0C\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93</li><li>\u91C7\u7528BSON\u5B58\u50A8\u6587\u6863\u6570\u636E</li></ol><h2 id="_02-\u4F18\u52BF" tabindex="-1">02 \u4F18\u52BF <a class="header-anchor" href="#_02-\u4F18\u52BF" aria-hidden="true">#</a></h2><ol><li>\u9762\u5411\u6587\u6863\u5B58\u50A8\uFF1A\u4EE5JSON\u683C\u5F0F\u7684\u6587\u6863\u4FDD\u5B58\u6570\u636E</li><li>\u4EFB\u4F55\u5C5E\u6027\u90FD\u53EF\u4EE5\u5EFA\u7ACB\u7D22\u5F15</li><li>\u590D\u5236\u4EE5\u53CA\u9AD8\u53EF\u6269\u5C55\u6027</li><li>\u81EA\u52A8\u5206\u7247</li><li>\u4E30\u5BCC\u7684\u67E5\u8BE2\u529F\u80FD</li><li>\u5FEB\u901F\u7684\u53CA\u65F6\u66F4\u65B0</li></ol><h2 id="_03-\u96C6\u5408" tabindex="-1">03 \u96C6\u5408 <a class="header-anchor" href="#_03-\u96C6\u5408" aria-hidden="true">#</a></h2><ol><li>\u96C6\u5408\u5C31\u662F\u4E00\u7EC4MongoDB\u6587\u6863\uFF0C\u5B83\u76F8\u5F53\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u7684\u8868\u8FD9\u79CD\u6982\u5FF5\u3002</li><li>\u96C6\u5408\u4F4D\u4E8E\u5355\u72EC\u7684\u4E00\u4E2A\u6570\u636E\u5E93\u4E2D\u3002</li><li>\u4E00\u4E2A\u96C6\u5408\u5185\u7684\u591A\u4E2A\u6587\u6863\u53EF\u6709\u591A\u4E2A\u4E0D\u540C\u7684\u5B57\u6BB5</li><li>\u96C6\u5408\u4E2D\u7684\u6587\u6863\u90FD\u6709\u76F8\u540C\u6216\u76F8\u5173\u7684\u76EE\u7684</li></ol><h2 id="_04-\u6587\u6863" tabindex="-1">04 \u6587\u6863 <a class="header-anchor" href="#_04-\u6587\u6863" aria-hidden="true">#</a></h2><ol><li>\u6587\u6863\u7531\u4E00\u7EC4key value\u7EC4\u6210\u3002</li><li>\u6587\u6863\u662F\u52A8\u6001\u6A21\u5F0F\uFF0C\u8FD9\u610F\u5473\u7740\u540C\u4E00\u96C6\u5408\u91CC\u7684\u6587\u6863\u4E0D\u9700\u8981\u6709\u76F8\u540C\u7684\u5B57\u6BB5\u548C\u7ED3\u6784\u3002</li><li>\u5728\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2Dtable\u4E2D\u6BCF\u4E00\u6761\u8BB0\u5F55\u76F8\u5F53\u4E8EMongoDB</li></ol><h2 id="_05-\u6570\u636E\u6587\u4EF6\u5E9E\u5927" tabindex="-1">05 \u6570\u636E\u6587\u4EF6\u5E9E\u5927 <a class="header-anchor" href="#_05-\u6570\u636E\u6587\u4EF6\u5E9E\u5927" aria-hidden="true">#</a></h2><p>MongoDB\u4F1A\u79EF\u6781\u7684\u9884\u5206\u914D\u9884\u7559\u7A7A\u95F4\u6765\u9632\u6B62\u6587\u4EF6\u7CFB\u7EDF\u788E\u7247</p><h2 id="_06-\u542F\u52A8\u5907\u4EFD\u6545\u969C\u6062\u590D" tabindex="-1">06 \u542F\u52A8\u5907\u4EFD\u6545\u969C\u6062\u590D <a class="header-anchor" href="#_06-\u542F\u52A8\u5907\u4EFD\u6545\u969C\u6062\u590D" aria-hidden="true">#</a></h2><ol><li>\u4ECE\u5907\u4EFD\u6570\u636E\u5E93\u58F0\u660E\u4E3B\u6570\u636E\u5E93\u5B95\u673A\u5230\u9009\u51FA\u4E00\u4E2A\u5907\u4EFD\u6570\u636E\u5E93\u4F5C\u4E3A\u65B0\u4E3B\u6570\u636E\u5E93\u5C06\u82B1\u8D3910\u523030\u79D2\u65F6\u95F4\u3002</li><li>\u8FD9\u671F\u95F4\u5728\u4E3B\u6570\u636E\u5E93\u4E0A\u7684\u64CD\u4F5C\u5C06\u4F1A\u5931\u8D25\uFF0C\u5305\u62EC\u5199\u5165\u548C\u5F3A\u4E00\u81F4\u6027\u8BFB\u53D6\u64CD\u4F5C</li><li>\u5373\u4F7F\u5728\u8FD9\u6BB5\u65F6\u95F4\u91CC\uFF0C\u4F60\u8FD8\u80FD\u5728\u7B2C\u4E8C\u6570\u636E\u5E93\u4E0A\u6267\u884C\u6700\u7EC8\u4E00\u81F4\u6027\u67E5\u8BE2</li></ol><h2 id="_07-\u5206\u7247" tabindex="-1">07 \u5206\u7247 <a class="header-anchor" href="#_07-\u5206\u7247" aria-hidden="true">#</a></h2><ol><li>MongoDB\u5206\u7247\u662F\u57FA\u4E8E\u533A\u57DF\u7684\uFF0C\u6240\u4EE5\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u88AB\u5B58\u653E\u5230\u4E00\u4E2A\u5757\u4E2D\uFF0C\u53EA\u6709\u5F53\u5B58\u5728\u591A\u4F59\u4E00\u4E2A\u5757\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u6709\u591A\u4E2A\u5206\u7247\u83B7\u53D6\u6570\u636E\u7684\u9009\u9879</li><li>\u6BCF\u4E2A\u9ED8\u8BA4\u5757\u7684\u5927\u5C0F\u662F64MB</li><li>\u66F4\u65B0\u4E00\u4E2A\u6B63\u5728\u88AB\u8FC1\u79FB\u7684\u5757\u4E0A\u7684\u6587\u6863\uFF0C\u66F4\u65B0\u64CD\u4F5C\u4F1A\u7ACB\u5373\u53D1\u751F\u5728\u65E7\u7684\u5206\u7247\u4E0A\uFF0C\u7136\u540E\u66F4\u6539\u624D\u4F1A\u5728\u6240\u6709\u6743\u8F6C\u79FB\u524D\u590D\u5236\u5230\u65B0\u7684\u5206\u7247\u4E0A</li></ol><h2 id="_08-movechunk\u76EE\u5F55\u91CC\u7684\u65E7\u6587\u4EF6\u5220\u9664\uFF1F" tabindex="-1">08 moveChunk\u76EE\u5F55\u91CC\u7684\u65E7\u6587\u4EF6\u5220\u9664\uFF1F <a class="header-anchor" href="#_08-movechunk\u76EE\u5F55\u91CC\u7684\u65E7\u6587\u4EF6\u5220\u9664\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u53EF\u5220\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u5728\u5206\u7247\u8FDB\u884C\u5747\u8861\u64CD\u4F5C\u7684\u65F6\u5019\u4EA7\u751F\u7684\u4E34\u65F6\u6587\u4EF6\uFF0C\u4E00\u65E6\u8FD9\u4E9B\u64CD\u4F5C\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u76F8\u5173\u7684\u4E34\u65F6\u6587\u4EF6\u4E5F\u5E94\u8BE5\u88AB\u5220\u9664\u6389\uFF0C</li><li>\u4F46\u76EE\u524D\u6E05\u7406\u5DE5\u4F5C\u662F\u9700\u8981\u624B\u52A8\u7684\uFF0C\u8BF7\u5C0F\u5FC3\u5730\u8003\u8651\u518D\u91CA\u653E\u8FD9\u4E9B\u6587\u4EF6\u7A7A\u95F4</li></ol><h2 id="_09-\u67E5\u770Bmongo\u6B63\u5728\u4F7F\u7528\u7684\u8FDE\u63A5" tabindex="-1">09 \u67E5\u770BMongo\u6B63\u5728\u4F7F\u7528\u7684\u8FDE\u63A5 <a class="header-anchor" href="#_09-\u67E5\u770Bmongo\u6B63\u5728\u4F7F\u7528\u7684\u8FDE\u63A5" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">db_adminCommand(</span><span style="color:#A5D6FF;">&quot;connPoolStats&quot;</span><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_10-mongodb-\u6027\u80FD\u4F18\u5316" tabindex="-1">10 MongoDB \u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#_10-mongodb-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h2><ol><li>\u4E3A\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\uFF1A\u5728\u67E5\u8BE2\u9891\u7E41\u7684\u5B57\u6BB5\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u80FD\u591F\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6</li><li>\u9650\u5236\u67E5\u8BE2\u7ED3\u679C\u7684\u6570\u91CF\uFF1Askip\u548Climit\u65B9\u6CD5\u5206\u9875\uFF0C\u51CF\u5C11\u67E5\u8BE2\u7ED3\u679C\u5927\u5C0F</li><li>\u53EA\u67E5\u8BE2\u9700\u8981\u7684\u90E8\u5206</li></ol>`,21),d=[n];function s(t,r,h,_,c,u){return e(),l("div",null,d)}var v=a(o,[["render",s]]);export{p as __pageData,v as default};