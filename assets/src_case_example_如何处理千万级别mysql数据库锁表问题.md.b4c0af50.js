import{_ as l,o as e,c as s,a as i}from"./app.2a154df8.js";const u=JSON.parse('{"title":"\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 \u5148\u641E\u6E05\u695Amysql\u6709\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\uFF1F","slug":"_01-\u5148\u641E\u6E05\u695Amysql\u6709\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\uFF1F"},{"level":2,"title":"02 \u5982\u679C\u7EBF\u4E0A\u73AF\u5883\u9047\u5230\u9501\u8868\u540E\u600E\u4E48\u529E\uFF1F","slug":"_02-\u5982\u679C\u7EBF\u4E0A\u73AF\u5883\u9047\u5230\u9501\u8868\u540E\u600E\u4E48\u529E\uFF1F"},{"level":2,"title":"03 \u5982\u4F55\u907F\u514D\u9501\u8868\u7684\u60C5\u51B5\uFF1F","slug":"_03-\u5982\u4F55\u907F\u514D\u9501\u8868\u7684\u60C5\u51B5\uFF1F"}],"relativePath":"src/case/example/\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898.md","lastUpdated":1697524142000}'),a={name:"src/case/example/\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898.md"},t=i('<h1 id="\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898\uFF1F" tabindex="-1">\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u5904\u7406\u5343\u4E07\u7EA7\u522Bmysql\u6570\u636E\u5E93\u9501\u8868\u95EE\u9898\uFF1F" aria-hidden="true">#</a></h1><h2 id="_01-\u5148\u641E\u6E05\u695Amysql\u6709\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\uFF1F" tabindex="-1">01 \u5148\u641E\u6E05\u695Amysql\u6709\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\uFF1F <a class="header-anchor" href="#_01-\u5148\u641E\u6E05\u695Amysql\u6709\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\uFF1F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">MyISAM</p><p>\u652F\u6301\u8868\u7EA7\u9501\uFF0C\u65E0\u8BBA\u662Finsert\u3001update\u3001delete\u90FD\u4F1A\u5BF9\u6574\u5F20\u8868\u52A0\u9501\uFF0C\u8BE5\u5B58\u50A8\u5F15\u64CE\u4E0D\u652F\u6301\u4E8B\u52A1\uFF0C\u6027\u80FD\u6BD4\u8F83\u597D\uFF0C\u4F46\u7531\u4E8E\u6574\u8868\u9501\uFF0Ctps\u4E0D\u592A\u9AD8\uFF0C\u4E0D\u9002\u5408\u9AD8\u5E76\u53D1\u64CD\u4F5C\u3002</p></div><div class="warning custom-block"><p class="custom-block-title">Innodb \u652F\u6301\u8868\u9501\u548C\u884C\u9501\uFF0C\u8BE5\u5B58\u50A8\u5F15\u64CE\u652F\u6301\u4E8B\u52A1\uFF0C\u7531\u4E8E\u652F\u6301\u7EC6\u7C92\u5EA6\u7684\u884C\u9501\uFF0C\u6BD4\u8F83\u9002\u5408\u9AD8\u5E76\u53D1\u64CD\u4F5C</p><p>\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F7F\u7528\u8868\u9501</p><ol><li>sql\u672A\u4F7F\u7528\u7D22\u5F15\uFF0C\u66F4\u65B0\u6216\u5220\u9664\u5355\u8868\u4E2D\u7684\u6570\u636E\uFF1B</li><li>sql\u4F7F\u7528\u7D22\u5F15\uFF0C\u4F46\u4E0D\u662F\u552F\u4E00\u7D22\u5F15\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u66F4\u65B0\u8868\u4E2D\u7684\u5927\u91CF\u6570\u636E\u6216\u5168\u91CF\u6570\u636E\uFF0C\u6B64\u65F6\u5982\u679C\u4F7F\u7528\u884C\u9501\uFF0C\u4F1A\u9020\u6210\u4E8B\u52A1\u957F\u65F6\u95F4\u7B49\u5F85\u3001\u9501\u51B2\u7A81\uFF0C\u56E0\u6B64mysql\u4F1A\u5347\u7EA7\u9501\u8868sql\u64CD\u4F5C\u51E0\u5F20\u8868\uFF0C\u5373\u5927\u4E8B\u52A1\uFF0C\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD9\u4E2A\u65F6\u5019mysql\u4E3A\u4E86\u9632\u6B62\u6B7B\u9501\u548C\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u4F1A\u540C\u65F6\u9501\u76F8\u5173\u7684\u8868\u3002</li><li>\u4F7F\u7528sql\u8BED\u53E5\u663E\u793A\u9501\u8868\u3002\u7C7B\u4F3C\u52A0\uFF1Afor update;</li><li>\u5BF9\u7EBF\u4E0A\u5927\u6570\u636E\u91CF\u5E76\u4E14\u6D3B\u8DC3\u65F6\u95F4\u957F\u7684\u8868\u76F4\u63A5\u8FDB\u884CDDL\u64CD\u4F5C\u6216\u52A0\u7D22\u5F15\u64CD\u4F5C\uFF0C\u8FD9\u4E5F\u4F1A\u9020\u6210\u9501\u8868\u3002</li></ol></div><h2 id="_02-\u5982\u679C\u7EBF\u4E0A\u73AF\u5883\u9047\u5230\u9501\u8868\u540E\u600E\u4E48\u529E\uFF1F" tabindex="-1">02 \u5982\u679C\u7EBF\u4E0A\u73AF\u5883\u9047\u5230\u9501\u8868\u540E\u600E\u4E48\u529E\uFF1F <a class="header-anchor" href="#_02-\u5982\u679C\u7EBF\u4E0A\u73AF\u5883\u9047\u5230\u9501\u8868\u540E\u600E\u4E48\u529E\uFF1F" aria-hidden="true">#</a></h2><ul><li>a. \u5F53\u7EBF\u4E0A\u5982\u679C\u53D1\u73B0\u5927\u91CFsql\u8BED\u53E5\u5BFC\u81F4\u957F\u65F6\u95F4\u9501\u8868\uFF0C\u53EF\u4EE5\u901A\u8FC7show processlist\u547D\u4EE4\u627E\u51FA\u9501\u8868\u7684\u8FDB\u7A0B\u53F7\u3002\u7136\u540E\u6267\u884Ckill\u8FDB\u7A0B\u53F7\u547D\u4EE4\uFF0C\u5FEB\u901F\u7ED3\u675F\u9501\u8868\u8BED\u53E5\u3002</li><li>b. \u6839\u636E\u4E0A\u4E00\u6B65\u7684\u9501\u8868sql\u5FEB\u901F\u4ECE\u7A0B\u5E8F\u4E2D\u627E\u51FA\u662F\u54EA\u4E2A\u4E1A\u52A1\u5BFC\u81F4\u7684\uFF0C\u89E3\u51B3bug\u540E\u7D27\u6025\u53D1\u7248\uFF0C\u5982\u679C\u662F\u975E\u6838\u5FC3\u4E1A\u52A1\u5BFC\u81F4\u7684\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7CFB\u7EDF\u4E0D\u88AB\u62D6\u57AE\uFF0C\u53EF\u4EE5\u5C06\u63A5\u53E3\u505A\u964D\u7EA7\u5904\u7406\u3002</li><li>c. \u53EF\u4EE5\u5199\u4E00\u4E9B\u68C0\u67E5\u9501\u8868\u7684\u8FD0\u7EF4\u811A\u672C\uFF0C\u6BCF\u9694\u51E0\u5206\u949F\u68C0\u67E5\u4E00\u6B21\uFF0C\u51FA\u73B0\u957F\u65F6\u95F4\u9501\u8868\u7684sql\u53D1\u51FA\u544A\u8B66\u63D0\u9192\u3002</li></ul><h2 id="_03-\u5982\u4F55\u907F\u514D\u9501\u8868\u7684\u60C5\u51B5\uFF1F" tabindex="-1">03 \u5982\u4F55\u907F\u514D\u9501\u8868\u7684\u60C5\u51B5\uFF1F <a class="header-anchor" href="#_03-\u5982\u4F55\u907F\u514D\u9501\u8868\u7684\u60C5\u51B5\uFF1F" aria-hidden="true">#</a></h2><ul><li>a. \u5BF9\u4E8E\u5927\u8868\u7684\u64CD\u4F5C\uFF0C\u67E5\u8BE2\u6761\u4EF6\u4E00\u5B9A\u8981\u4FDD\u8BC1\u547D\u4E2D\u7D22\u5F15\uFF0C\u5982\u679C\u80FD\u547D\u4E2D\u552F\u4E00\u7D22\u5F15\u5C31\u66F4\u597D\u4E86\u3002</li><li>b. \u6211\u4EEC\u5728\u7A0B\u5E8F\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u5C3D\u53EF\u80FD\u5C06\u5927\u4E8B\u52A1\u62C6\u5206\u4E3A\u5C0F\u4E8B\u52A1\uFF0C\u51CF\u5C11\u9501\u8868\u6216\u8005\u56DE\u6EDA\uFF0C\u6BD4\u5982\uFF1A\u62BD\u79BB\u90E8\u5206\u4E1A\u52A1\u903B\u8F91\u5F02\u6B65\u53D1\u9001\u6D88\u606F\u961F\u5217\u5904\u7406\u3002</li><li>c. \u66F4\u65B0\u5F88\u9891\u7E41\u7684\u4E1A\u52A1\uFF0C\u5C3D\u91CF\u8F6C\u4E3A\u6279\u91CF\u5904\u7406\uFF0C\u53E6\u5916\u5C3D\u53EF\u80FD\u51CF\u5C11\u5355\u6B21\u5904\u7406\u7684\u6570\u636E\u91CF\uFF0C\u5927\u6570\u636E\u91CF\u53EF\u4EE5\u5206\u6279\u5904\u7406\u3002</li><li>d. \u4E0D\u8981\u901A\u8FC7select * from user for update\u663E\u793A\u9501\u8868\uFF0C\u9AD8\u5E76\u53D1\u7684\u65F6\u5019\u4F1A\u4E25\u91CD\u5F71\u54CDtps\uFF0C\u901A\u8FC7\u4E50\u89C2\u9501\u52A0\u7248\u672C\u53F7\u5B9E\u73B0\u6216\u8005\u5148\u5199\u5230\u7F13\u5B58\u7136\u540E\u5F02\u6B65\u5199\u8868\u7B49\u65B9\u6848\u89E3\u51B3\u3002</li><li>e. \u4E1A\u52A1\u9AD8\u5CF0\u671F\uFF0C\u4E0D\u8981\u968F\u4FBF\u76F4\u63A5\u52A0\u5B57\u6BB5\u6216\u8005\u7D22\u5F15\uFF0C\u5C3D\u91CF\u7528\u6237\u4E0D\u6D3B\u8DC3\u7684\u65F6\u5019\u6267\u884C\uFF0C\u4F46\u662F\u5982\u679C\u4E00\u5B9A\u8981\u5728\u9AD8\u5CF0\u671F\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u590D\u5236\u65E7\u8868\u7ED3\u6784\u521B\u5EFA\u4E00\u4E2A\u65B0\u8868\uFF0C\u7136\u540E\u5728\u65B0\u8868\u4E0A\u52A0\u5B57\u6BB5\u6216\u7D22\u5F15\uFF0C\u63A5\u7740\u5C06\u539F\u6765\u65E7\u8868\u7684\u6570\u636E\u590D\u5236\u5230\u65B0\u8868\uFF0C\u518Drename\u4E24\u4E2A\u8868\uFF0C\u6700\u540E\u5C06rename\u671F\u95F4\u65E7\u8868\u7684\u589E\u91CF\u6570\u636E\u8FC1\u79FB\u5230\u65B0\u8868\u3002</li><li>f. \u91C7\u7528\u8BFB\u5199\u5206\u79BB\u67B6\u6784\u3002</li></ul><div class="tip custom-block"><p class="custom-block-title">\u9501\u8868\u7684\u51E0\u79CD\u573A\u666F</p><ol><li>\u91C7\u7528 MyISAM \u5B58\u50A8\u5F15\u64CE</li><li>sql \u672A\u4F7F\u7528\u7D22\u5F15\uFF0C\u66F4\u65B0\u6216\u5220\u9664\u5355\u8868\u4E2D\u7684\u6570\u636E</li><li>sql \u4F7F\u7528\u7D22\u5F15\uFF0C\u4F46\u4E0D\u662F\u552F\u4E00\u7D22\u5F15\uFF0C\u66F4\u65B0\u8868\u4E2D\u7684\u5927\u91CF\u6570\u636E\u6216\u5168\u91CF\u6570\u636E</li><li>\u4F7F\u7528\u7C7B\u4F3C select * from user for update \u7684 sql \u8BED\u53E5\u663E\u793A\u9501\u8868</li><li>\u5BF9\u7EBF\u4E0A\u5927\u6570\u636E\u91CF\u5E76\u4E14\u6D3B\u8DC3\u65F6\u95F4\u957F\u7684\u8868\u76F4\u63A5\u8FDB\u884C DDL \u64CD\u4F5C\u6216\u52A0\u7D22\u5F15\u64CD\u4F5C</li></ol></div>',9),r=[t];function c(_,o,d,n,m,p){return e(),s("div",null,r)}var q=l(a,[["render",c]]);export{u as __pageData,q as default};
