import{_ as o,r as a,o as t,c as d,b as n,d as s,e as l,a as p}from"./app.2a154df8.js";const q=JSON.parse('{"title":"vue \u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6","slug":"\u7EC4\u4EF6"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"03 views \u4E0B\u7684\u6587\u4EF6\u547D\u540D","slug":"_03-views-\u4E0B\u7684\u6587\u4EF6\u547D\u540D"},{"level":2,"title":"04 props \u547D\u540D","slug":"_04-props-\u547D\u540D"},{"level":2,"title":"05 \u76EE\u5F55\u6587\u4EF6\u5939\u53CA\u5B50\u6587\u4EF6\u89C4\u8303","slug":"_05-\u76EE\u5F55\u6587\u4EF6\u5939\u53CA\u5B50\u6587\u4EF6\u89C4\u8303"},{"level":2,"title":"06 \u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u89C4\u8303","slug":"_06-\u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u89C4\u8303"},{"level":2,"title":"07 \u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F","slug":"_07-\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F"},{"level":2,"title":"08 \u7EC4\u4EF6\u9009\u9879\u987A\u5E8F","slug":"_08-\u7EC4\u4EF6\u9009\u9879\u987A\u5E8F"},{"level":2,"title":"09 \u4F7F\u7528 ES6 \u98CE\u683C\u7F16\u7801","slug":"_09-\u4F7F\u7528-es6-\u98CE\u683C\u7F16\u7801"},{"level":2,"title":"10 \u6307\u4EE4\u89C4\u8303","slug":"_10-\u6307\u4EE4\u89C4\u8303"},{"level":2,"title":"11 Props \u89C4\u8303","slug":"_11-props-\u89C4\u8303"},{"level":2,"title":"12 sass \u89C4\u8303","slug":"_12-sass-\u89C4\u8303"},{"level":2,"title":"13 \u7279\u6B8A\u89C4\u8303","slug":"_13-\u7279\u6B8A\u89C4\u8303"},{"level":2,"title":"14 \u53C2\u8003","slug":"_14-\u53C2\u8003"}],"relativePath":"src/case/norm/vue\u89C4\u8303.md","lastUpdated":1697503790000}'),i={name:"src/case/norm/vue\u89C4\u8303.md"},r=p('<h1 id="vue-\u89C4\u8303" tabindex="-1">vue \u89C4\u8303 <a class="header-anchor" href="#vue-\u89C4\u8303" aria-hidden="true">#</a></h1><h2 id="\u7EC4\u4EF6" tabindex="-1">\u7EC4\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>PascalCase (\u5355\u8BCD\u9996\u5B57\u6BCD\u5927\u5199\u547D\u540D)\u662F\u6700\u901A\u7528\u7684\u58F0\u660E\u7EA6\u5B9A</li><li>kebab-case (\u77ED\u6A2A\u7EBF\u5206\u9694\u547D\u540D) \u662F\u6700\u901A\u7528\u7684\u4F7F\u7528\u7EA6\u5B9A</li><li>\u7EC4\u4EF6\u540D\u5E94\u8BE5\u59CB\u7EC8\u662F\u591A\u4E2A\u5355\u8BCD\u7684\uFF0C\u6839\u7EC4\u4EF6 App \u9664\u5916</li></ol><div class="tip custom-block"><p class="custom-block-title">\u547D\u540D\u9075\u5FAA PascalCase \u7EA6\u5B9A</p><ul><li><p>\u516C\u7528\u7EC4\u4EF6\u4EE5 Abcd (\u516C\u53F8\u540D\u7F29\u5199\u7B80\u79F0) \u5F00\u5934\uFF0C\u5982\uFF08AbcdDatePicker,AbcdTable\uFF09</p></li><li><p>\u9875\u9762\u5185\u90E8\u7EC4\u4EF6\u4EE5\u7EC4\u4EF6\u6A21\u5757\u540D\u7B80\u5199\u4E3A\u5F00\u5934\uFF0CItem \u4E3A\u7ED3\u5C3E\uFF0C\u5982\uFF08StaffBenchToChargeItem\uFF0CStaffBenchAppNotArrItem\uFF09</p></li></ul></div>',4),y={class:"tip custom-block"},u=n("p",{class:"custom-block-title"},"\u4F7F\u7528\u9075\u5FAA kebab-case \u7EA6\u5B9A",-1),g=p(`<h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><ol><li>\u9A7C\u5CF0\u5F0F\u547D\u540D\uFF0C\u7EDF\u4E00\u4F7F\u7528\u52A8\u8BCD\u6216\u8005\u52A8\u8BCD+\u540D\u8BCD\u5F62\u5F0F</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  //bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  go\u3001nextPage\u3001show\u3001open\u3001login</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">   // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  jumpPage\u3001openCarInfoDialog</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ol start="2"><li>\u8BF7\u6C42\u6570\u636E\u65B9\u6CD5\uFF0C\u4EE5 data \u7ED3\u5C3E</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  //bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  takeData\u3001confirmData\u3001getList\u3001postForm</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  getListData\u3001postFormData</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ol start="3"><li>init\u3001refresh \u5355\u8BCD\u9664\u5916</li><li>\u5C3D\u91CF\u4F7F\u7528\u5E38\u7528\u5355\u8BCD\u5F00\u5934\uFF08set\u3001get\u3001go\u3001can\u3001has\u3001is\uFF09</li></ol><div class="tip custom-block"><p class="custom-block-title">\u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD</p><p>get \u83B7\u53D6/set \u8BBE\u7F6E, add \u589E\u52A0/remove \u5220\u9664 create \u521B\u5EFA/destory \u79FB\u9664 start \u542F\u52A8/stop \u505C\u6B62 open \u6253\u5F00/close \u5173\u95ED, read \u8BFB\u53D6/write \u5199\u5165 load \u8F7D\u5165/save \u4FDD\u5B58, create \u521B\u5EFA/destroy \u9500\u6BC1 begin \u5F00\u59CB/end \u7ED3\u675F, backup \u5907\u4EFD/restore \u6062\u590D import \u5BFC\u5165/export \u5BFC\u51FA, split \u5206\u5272/merge \u5408\u5E76 inject \u6CE8\u5165/extract \u63D0\u53D6, attach \u9644\u7740/detach \u8131\u79BB bind \u7ED1\u5B9A/separate \u5206\u79BB, view \u67E5\u770B/browse \u6D4F\u89C8 edit \u7F16\u8F91/modify \u4FEE\u6539, select \u9009\u53D6/mark \u6807\u8BB0 copy \u590D\u5236/paste \u7C98\u8D34, undo \u64A4\u9500/redo \u91CD\u505A insert \u63D2\u5165/delete \u79FB\u9664, add \u52A0\u5165/append \u6DFB\u52A0 clean \u6E05\u7406/clear \u6E05\u9664, index \u7D22\u5F15/sort \u6392\u5E8F find \u67E5\u627E/search \u641C\u7D22, increase \u589E\u52A0/decrease \u51CF\u5C11 play \u64AD\u653E/pause \u6682\u505C, launch \u542F\u52A8/run \u8FD0\u884C compile \u7F16\u8BD1/execute \u6267\u884C, debug \u8C03\u8BD5/trace \u8DDF\u8E2A observe \u89C2\u5BDF/listen \u76D1\u542C, build \u6784\u5EFA/publish \u53D1\u5E03 input \u8F93\u5165/output \u8F93\u51FA, encode \u7F16\u7801/decode \u89E3\u7801 encrypt \u52A0\u5BC6/decrypt \u89E3\u5BC6, compress \u538B\u7F29/decompress \u89E3\u538B\u7F29 pack \u6253\u5305/unpack \u89E3\u5305, parse \u89E3\u6790/emit \u751F\u6210 connect \u8FDE\u63A5/disconnect \u65AD\u5F00, send \u53D1\u9001/receive \u63A5\u6536 download \u4E0B\u8F7D/upload \u4E0A\u4F20, refresh \u5237\u65B0/synchronize \u540C\u6B65 update \u66F4\u65B0/revert \u590D\u539F, lock \u9501\u5B9A/unlock \u89E3\u9501 check out \u7B7E\u51FA/check in \u7B7E\u5165, submit \u63D0\u4EA4/commit \u4EA4\u4ED8 push \u63A8/pull \u62C9, expand \u5C55\u5F00/collapse \u6298\u53E0 begin \u8D77\u59CB/end \u7ED3\u675F, start \u5F00\u59CB/finish \u5B8C\u6210 enter \u8FDB\u5165/exit \u9000\u51FA, abort \u653E\u5F03/quit \u79BB\u5F00 obsolete \u5E9F\u5F03/depreciate \u5E9F\u65E7, collect \u6536\u96C6/aggregate \u805A\u96C6</p></div><h2 id="_03-views-\u4E0B\u7684\u6587\u4EF6\u547D\u540D" tabindex="-1">03 views \u4E0B\u7684\u6587\u4EF6\u547D\u540D <a class="header-anchor" href="#_03-views-\u4E0B\u7684\u6587\u4EF6\u547D\u540D" aria-hidden="true">#</a></h2><ol><li>\u53EA\u6709\u4E00\u4E2A\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u51FA\u73B0\u6587\u4EF6\u5939\uFF0C\u800C\u662F\u76F4\u63A5\u653E\u5728 views \u76EE\u5F55\u4E0B\u9762\uFF0C\u5982 index.vue</li><li>\u5C3D\u91CF\u662F\u540D\u8BCD,\u4E14\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5</li><li>\u5F00\u5934\u7684\u5355\u8BCD\u5C31\u662F\u6240\u5C5E\u6A21\u5757\u540D\u5B57\uFF08workbenchIndex\u3001workbenchList\u3001workbenchEdit\uFF09</li><li>\u540D\u5B57\u81F3\u5C11\u4E24\u4E2A\u5355\u8BCD\uFF08good: workbenchIndex\uFF09\uFF08bad:workbench\uFF09</li></ol><h2 id="_04-props-\u547D\u540D" tabindex="-1">04 props \u547D\u540D <a class="header-anchor" href="#_04-props-\u547D\u540D" aria-hidden="true">#</a></h2><p>\u5728\u58F0\u660E prop \u7684\u65F6\u5019\uFF0C\u5176\u547D\u540D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 camelCase\uFF0C\u800C\u5728\u6A21\u677F\u4E2D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528 kebab-case</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">props: {</span></span>
<span class="line"><span style="color:#c9d1d9;">  &#39;greeting-text&#39;: String</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;welcome-message greetingText=&quot;hi&quot;&gt;&lt;/welcome-message&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">props: {</span></span>
<span class="line"><span style="color:#c9d1d9;">  greetingText: String</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;welcome-message greeting-text=&quot;hi&quot;&gt;&lt;/welcome-message&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_05-\u76EE\u5F55\u6587\u4EF6\u5939\u53CA\u5B50\u6587\u4EF6\u89C4\u8303" tabindex="-1">05 \u76EE\u5F55\u6587\u4EF6\u5939\u53CA\u5B50\u6587\u4EF6\u89C4\u8303 <a class="header-anchor" href="#_05-\u76EE\u5F55\u6587\u4EF6\u5939\u53CA\u5B50\u6587\u4EF6\u89C4\u8303" aria-hidden="true">#</a></h2><ul><li>\u4EE5\u4E0B\u7EDF\u4E00\u7BA1\u7406\u5904\u5747\u5BF9\u5E94\u76F8\u5E94\u6A21\u5757</li><li>\u4EE5\u4E0B\u5168\u5C40\u6587\u4EF6\u6587\u4EF6\u5747\u4EE5 index.js \u5BFC\u51FA\uFF0C\u5E76\u5728 main.js \u4E2D\u5BFC\u5165</li><li>\u4EE5\u4E0B\u4E34\u65F6\u6587\u4EF6\uFF0C\u5728\u4F7F\u7528\u540E\uFF0C\u63A5\u53E3\u5DF2\u7ECF\u6709\u4E86\uFF0C\u53D1\u7248\u540E\u6E05\u9664</li></ul><div class="tip custom-block"><p class="custom-block-title">\u76EE\u5F55</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">src                               \u6E90\u7801\u76EE\u5F55</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- api                              \u63A5\u53E3\uFF0C\u7EDF\u4E00\u7BA1\u7406</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- assets                           \u9759\u6001\u8D44\u6E90\uFF0C\u7EDF\u4E00\u7BA1\u7406</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- components                       \u516C\u7528\u7EC4\u4EF6\uFF0C\u5168\u5C40\u6587\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- filters                          \u8FC7\u6EE4\u5668\uFF0C\u5168\u5C40\u5DE5\u5177</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- icons                            \u56FE\u6807\uFF0C\u5168\u5C40\u8D44\u6E90</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- datas                            \u6A21\u62DF\u6570\u636E\uFF0C\u4E34\u65F6\u5B58\u653E</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- lib                              \u5916\u90E8\u5F15\u7528\u7684\u63D2\u4EF6\u5B58\u653E\u53CA\u4FEE\u6539\u6587\u4EF6</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- mock                             \u6A21\u62DF\u63A5\u53E3\uFF0C\u4E34\u65F6\u5B58\u653E</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- router                           \u8DEF\u7531\uFF0C\u7EDF\u4E00\u7BA1\u7406</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- store                            vuex, \u7EDF\u4E00\u7BA1\u7406</span></span>
<span class="line"><span style="color:#c9d1d9;">|-- views                         \u89C6\u56FE\u76EE\u5F55</span></span>
<span class="line"><span style="color:#c9d1d9;">|   |-- staffWorkbench               \u89C6\u56FE\u6A21\u5757\u540D</span></span>
<span class="line"><span style="color:#c9d1d9;">|   |-- |-- staffWorkbench.vue       \u6A21\u5757\u5165\u53E3\u9875\u9762</span></span>
<span class="line"><span style="color:#c9d1d9;">|   |-- |-- indexComponents          \u6A21\u5757\u9875\u9762\u7EA7\u7EC4\u4EF6\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#c9d1d9;">|   |-- |-- components               \u6A21\u5757\u901A\u7528\u7EC4\u4EF6\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><h2 id="_06-\u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u89C4\u8303" tabindex="-1">06 \u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u89C4\u8303 <a class="header-anchor" href="#_06-\u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u5E94\u8BE5\u5206\u591A\u884C\u64B0\u5199\uFF0C\u6BCF\u4E2A\u7279\u6027\u4E00\u884C\u3002(\u589E\u5F3A\u66F4\u6613\u8BFB)</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;img src=&quot;https://vuejs.org/images/logo.png&quot; alt=&quot;Vue Logo&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;my-component foo=&quot;a&quot; bar=&quot;b&quot; baz=&quot;c&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;img</span></span>
<span class="line"><span style="color:#c9d1d9;">  src=&quot;https://vuejs.org/images/logo.png&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  alt=&quot;Vue Logo&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;my-component</span></span>
<span class="line"><span style="color:#c9d1d9;">  foo=&quot;a&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  bar=&quot;b&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  baz=&quot;c&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_07-\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F" tabindex="-1">07 \u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F <a class="header-anchor" href="#_07-\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F" aria-hidden="true">#</a></h2><p>\u539F\u751F\u5C5E\u6027\u653E\u524D\u9762\uFF0C\u6307\u4EE4\u653E\u540E\u9762</p><div class="tip custom-block"><p class="custom-block-title">\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  - class</span></span>
<span class="line"><span style="color:#c9d1d9;">  - id,ref</span></span>
<span class="line"><span style="color:#c9d1d9;">  - name</span></span>
<span class="line"><span style="color:#c9d1d9;">  - data-*</span></span>
<span class="line"><span style="color:#c9d1d9;">  - src, for, type, href,value,max-length,max,min,pattern</span></span>
<span class="line"><span style="color:#c9d1d9;">  - title, alt\uFF0Cplaceholder</span></span>
<span class="line"><span style="color:#c9d1d9;">  - aria-*, role</span></span>
<span class="line"><span style="color:#c9d1d9;">  - required,readonly,disabled</span></span>
<span class="line"><span style="color:#c9d1d9;">  - is</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-for</span></span>
<span class="line"><span style="color:#c9d1d9;">  - key</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-if</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-else-if</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-else</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-show</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-cloak</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-pre</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-once</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-model</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-bind,:</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-on,@</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-html</span></span>
<span class="line"><span style="color:#c9d1d9;">  - v-text</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><h2 id="_08-\u7EC4\u4EF6\u9009\u9879\u987A\u5E8F" tabindex="-1">08 \u7EC4\u4EF6\u9009\u9879\u987A\u5E8F <a class="header-anchor" href="#_08-\u7EC4\u4EF6\u9009\u9879\u987A\u5E8F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  - components</span></span>
<span class="line"><span style="color:#c9d1d9;">  - props</span></span>
<span class="line"><span style="color:#c9d1d9;">  - data</span></span>
<span class="line"><span style="color:#c9d1d9;">  - computed</span></span>
<span class="line"><span style="color:#c9d1d9;">  - created</span></span>
<span class="line"><span style="color:#c9d1d9;">  - mounted</span></span>
<span class="line"><span style="color:#c9d1d9;">  - methods</span></span>
<span class="line"><span style="color:#c9d1d9;">  - filter</span></span>
<span class="line"><span style="color:#c9d1d9;">  - watch</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><h2 id="_09-\u4F7F\u7528-es6-\u98CE\u683C\u7F16\u7801" tabindex="-1">09 \u4F7F\u7528 ES6 \u98CE\u683C\u7F16\u7801 <a class="header-anchor" href="#_09-\u4F7F\u7528-es6-\u98CE\u683C\u7F16\u7801" aria-hidden="true">#</a></h2><ol><li>\u5B9A\u4E49\u53D8\u91CF\u4F7F\u7528 let ,\u5B9A\u4E49\u5E38\u91CF\u4F7F\u7528 const</li><li>\u9759\u6001\u5B57\u7B26\u4E32\u4E00\u5F8B\u4F7F\u7528\u5355\u5F15\u53F7\u6216\u53CD\u5F15\u53F7\uFF0C\u52A8\u6001\u5B57\u7B26\u4E32\u4F7F\u7528\u53CD\u5F15\u53F7</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  const a = &#39;foobar&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">  const b = &#39;foo&#39; + a + &#39;bar&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // acceptable</span></span>
<span class="line"><span style="color:#c9d1d9;">  const c = \`foobar\`</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  const a = &#39;foobar&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">  const b = \`foo\${a}bar\`</span></span>
<span class="line"><span style="color:#c9d1d9;">  const c = &#39;foobar&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><ol start="3"><li>\u89E3\u6784\u8D4B\u503C</li></ol><div class="warning custom-block"><p class="custom-block-title">\u6570\u7EC4\u6210\u5458\u5BF9\u53D8\u91CF\u8D4B\u503C\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u89E3\u6784\u8D4B\u503C</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // \u6570\u7EC4\u89E3\u6784\u8D4B\u503C</span></span>
<span class="line"><span style="color:#c9d1d9;">  const arr = [1, 2, 3, 4]</span></span>
<span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  const first = arr[0]</span></span>
<span class="line"><span style="color:#c9d1d9;">  const second = arr[1]</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  const [first, second] = arr</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><div class="warning custom-block"><p class="custom-block-title">\u51FD\u6570\u7684\u53C2\u6570\u5982\u679C\u662F\u5BF9\u8C61\u7684\u6210\u5458\uFF0C\u4F18\u5148\u4F7F\u7528\u89E3\u6784\u8D4B\u503C</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // \u5BF9\u8C61\u89E3\u6784\u8D4B\u503C</span></span>
<span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  function getFullName(user) {</span></span>
<span class="line"><span style="color:#c9d1d9;">    const firstName = user.firstName</span></span>
<span class="line"><span style="color:#c9d1d9;">    const lastName = user.lastName</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  function getFullName(obj) {</span></span>
<span class="line"><span style="color:#c9d1d9;">    const { firstName, lastName } = obj</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // best</span></span>
<span class="line"><span style="color:#c9d1d9;">  function getFullName({ firstName, lastName }) {}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol start="4"><li>\u62F7\u8D1D\u6570\u7EC4</li></ol><p>\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF08...\uFF09\u62F7\u8D1D\u6570\u7EC4\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  const items = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  const itemsCopy = items</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  const itemsCopy = [...items]</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol start="5"><li>\u7BAD\u5934\u51FD\u6570\uFF0C\u9700\u8981\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u573A\u5408\uFF0C\u5C3D\u91CF\u7528\u7BAD\u5934\u51FD\u6570\u4EE3\u66FF\u3002\u56E0\u4E3A\u8FD9\u6837\u66F4\u7B80\u6D01\uFF0C\u800C\u4E14\u7ED1\u5B9A\u4E86 this</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  const self = this;</span></span>
<span class="line"><span style="color:#c9d1d9;">  const boundMethod = function(...params) {</span></span>
<span class="line"><span style="color:#c9d1d9;">    return method.apply(self, params);</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // acceptable</span></span>
<span class="line"><span style="color:#c9d1d9;">  const boundMethod = method.bind(this);</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // best</span></span>
<span class="line"><span style="color:#c9d1d9;">  const boundMethod = (...params) =&gt; method.apply(this, params);</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol start="6"><li>\u6A21\u5757</li></ol><ul><li>\u5982\u679C\u6A21\u5757\u53EA\u6709\u4E00\u4E2A\u8F93\u51FA\u503C\uFF0C\u5C31\u4F7F\u7528 export default\uFF0C\u5982\u679C\u6A21\u5757\u6709\u591A\u4E2A\u8F93\u51FA\u503C\uFF0C\u5C31\u4E0D\u4F7F\u7528 export default\uFF0Cexport default \u4E0E\u666E\u901A\u7684 export \u4E0D\u8981\u540C\u65F6\u4F7F\u7528</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  import * as myObject from &#39;./importModule&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  import myObject from &#39;./importModule&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ul><li>\u5982\u679C\u6A21\u5757\u9ED8\u8BA4\u8F93\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u540D\u7684\u9996\u5B57\u6BCD\u5E94\u8BE5\u5C0F\u5199\u3002</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  function makeStyleGuide() {</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  export default makeStyleGuide;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ul><li>\u5982\u679C\u6A21\u5757\u9ED8\u8BA4\u8F93\u51FA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u540D\u7684\u9996\u5B57\u6BCD\u5E94\u8BE5\u5927\u5199\u3002</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  const StyleGuide = {</span></span>
<span class="line"><span style="color:#c9d1d9;">    es6: {</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">  };</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  export default StyleGuide;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><h2 id="_10-\u6307\u4EE4\u89C4\u8303" tabindex="-1">10 \u6307\u4EE4\u89C4\u8303 <a class="header-anchor" href="#_10-\u6307\u4EE4\u89C4\u8303" aria-hidden="true">#</a></h2><ol><li>\u6307\u4EE4\u6709\u7F29\u5199\u4E00\u5F8B\u91C7\u7528\u7F29\u5199\u5F62\u5F0F</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  v-bind:class=&quot;{&#39;show-left&#39;\uFF1Atrue}&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  v-on:click=&quot;getListData&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  :class=&quot;{&#39;show-left&#39;\uFF1Atrue}&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;">  @click=&quot;getListData&quot;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol start="2"><li>v-for \u5FAA\u73AF\u5FC5\u987B\u52A0\u4E0A key \u5C5E\u6027\uFF0C\u5728\u6574\u4E2A for \u5FAA\u73AF\u4E2D key \u9700\u8981\u552F\u4E00</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  &lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;todo in todos&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol start="3"><li>\u907F\u514D v-if \u548C v-for \u540C\u65F6\u7528\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\uFF08\u6027\u80FD\u95EE\u9898\uFF09</li></ol><div class="warning custom-block"><p class="custom-block-title">\u5C06\u6570\u636E\u66FF\u6362\u4E3A\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u8BA9\u5176\u8FD4\u56DE\u8FC7\u6EE4\u540E\u7684\u5217\u8868</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  &lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;user in users&quot; v-if=&quot;user.isActive&quot; :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ user.name }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;user in activeUsers&quot; :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ user.name }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  computed: {</span></span>
<span class="line"><span style="color:#c9d1d9;">    activeUsers: function () {</span></span>
<span class="line"><span style="color:#c9d1d9;">      return this.users.filter(function (user) {</span></span>
<span class="line"><span style="color:#c9d1d9;">        return user.isActive</span></span>
<span class="line"><span style="color:#c9d1d9;">      })</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><div class="warning custom-block"><p class="custom-block-title">\u5C06 v-if \u79FB\u52A8\u81F3\u5BB9\u5668\u5143\u7D20\u4E0A (\u6BD4\u5982 ul, ol)</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  &lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;user in users&quot; v-if=&quot;shouldShowUsers&quot; :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ user.name }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;ul v-if=&quot;shouldShowUsers&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;li v-for=&quot;user in users&quot; :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">      {{ user.name }}</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><h2 id="_11-props-\u89C4\u8303" tabindex="-1">11 Props \u89C4\u8303 <a class="header-anchor" href="#_11-props-\u89C4\u8303" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">Props \u5B9A\u4E49\u5E94\u8BE5\u5C3D\u91CF\u8BE6\u7EC6</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">// bad \u8FD9\u6837\u505A\u53EA\u6709\u5F00\u53D1\u539F\u578B\u7CFB\u7EDF\u65F6\u53EF\u4EE5\u63A5\u53D7</span></span>
<span class="line"><span style="color:#c9d1d9;">props: [&#39;status&#39;]</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">// good</span></span>
<span class="line"><span style="color:#c9d1d9;">props: {</span></span>
<span class="line"><span style="color:#c9d1d9;">  status: {</span></span>
<span class="line"><span style="color:#c9d1d9;">    type: String,</span></span>
<span class="line"><span style="color:#c9d1d9;">    required: true,</span></span>
<span class="line"><span style="color:#c9d1d9;">    validator: function (value) {</span></span>
<span class="line"><span style="color:#c9d1d9;">      return [</span></span>
<span class="line"><span style="color:#c9d1d9;">        &#39;syncing&#39;,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &#39;synced&#39;,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &#39;version-conflict&#39;,</span></span>
<span class="line"><span style="color:#c9d1d9;">        &#39;error&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">      ].indexOf(value) !== -1</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div></div><ol><li>\u907F\u514D this.$parent</li><li>\u8C03\u8BD5\u4FE1\u606F console.log() debugger \u4F7F\u7528\u5B8C\u53CA\u65F6\u5220\u9664</li><li>\u9664\u4E86\u4E09\u76EE\u8FD0\u7B97\uFF0Cif,else \u7B49\u7981\u6B62\u7B80\u5199</li></ol><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  if (true)</span></span>
<span class="line"><span style="color:#c9d1d9;">      alert(name);</span></span>
<span class="line"><span style="color:#c9d1d9;">  console.log(name);</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // bad</span></span>
<span class="line"><span style="color:#c9d1d9;">  if (true)</span></span>
<span class="line"><span style="color:#c9d1d9;">  alert(name);</span></span>
<span class="line"><span style="color:#c9d1d9;">  console.log(name)</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  if (true) {</span></span>
<span class="line"><span style="color:#c9d1d9;">      alert(name);</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;">  console.log(name);</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_12-sass-\u89C4\u8303" tabindex="-1">12 sass \u89C4\u8303 <a class="header-anchor" href="#_12-sass-\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u5F53\u4F7F\u7528 Sass \u7684\u5D4C\u5957\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u91CD\u8981\u7684\u662F\u6709\u4E00\u4E2A\u660E\u786E\u7684\u5D4C\u5957\u987A\u5E8F\uFF0C\u4EE5\u4E0B\u5185\u5BB9\u662F\u4E00\u4E2A SCSS \u5757\u5E94\u5177\u6709\u7684\u987A\u5E8F\u3002</p><ul><li>\u5F53\u524D\u9009\u62E9\u5668\u7684\u6837\u5F0F\u5C5E\u6027</li><li>\u7236\u7EA7\u9009\u62E9\u5668\u7684\u4F2A\u7C7B\u9009\u62E9\u5668 :first-letter, :hover, :active etc</li><li>\u4F2A\u7C7B\u5143\u7D20 :before and :after</li><li>\u7236\u7EA7\u9009\u62E9\u5668\u7684\u58F0\u660E\u6837\u5F0F .selected, .active, .enlarged etc.</li><li>\u7528 Sass \u7684\u4E0A\u4E0B\u6587\u5A92\u4F53\u67E5\u8BE2</li><li>\u5B50\u9009\u62E9\u5668\u4F5C\u4E3A\u6700\u540E\u7684\u90E8\u5206</li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;">  .product-teaser {</span></span>
<span class="line"><span style="color:#c9d1d9;">    // 1. Style attributes</span></span>
<span class="line"><span style="color:#c9d1d9;">    display: inline-block;</span></span>
<span class="line"><span style="color:#c9d1d9;">    padding: 1rem;</span></span>
<span class="line"><span style="color:#c9d1d9;">    background-color: whitesmoke;</span></span>
<span class="line"><span style="color:#c9d1d9;">    color: grey;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    // 2. Pseudo selectors with parent selector</span></span>
<span class="line"><span style="color:#c9d1d9;">    &amp;:hover {</span></span>
<span class="line"><span style="color:#c9d1d9;">      color: black;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    // 3. Pseudo elements with parent selector</span></span>
<span class="line"><span style="color:#c9d1d9;">    &amp;:before {</span></span>
<span class="line"><span style="color:#c9d1d9;">      content: &quot;&quot;;</span></span>
<span class="line"><span style="color:#c9d1d9;">      display: block;</span></span>
<span class="line"><span style="color:#c9d1d9;">      border-top: 1px solid grey;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    &amp;:after {</span></span>
<span class="line"><span style="color:#c9d1d9;">      content: &quot;&quot;;</span></span>
<span class="line"><span style="color:#c9d1d9;">      display: block;</span></span>
<span class="line"><span style="color:#c9d1d9;">      border-top: 1px solid grey;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    // 4. State classes with parent selector</span></span>
<span class="line"><span style="color:#c9d1d9;">    &amp;.active {</span></span>
<span class="line"><span style="color:#c9d1d9;">      background-color: pink;</span></span>
<span class="line"><span style="color:#c9d1d9;">      color: red;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">      // 4.2. Pseuso selector in state class selector</span></span>
<span class="line"><span style="color:#c9d1d9;">      &amp;:hover {</span></span>
<span class="line"><span style="color:#c9d1d9;">        color: darkred;</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    // 5. Contextual media queries</span></span>
<span class="line"><span style="color:#c9d1d9;">    @media screen and (max-width: 640px) {</span></span>
<span class="line"><span style="color:#c9d1d9;">      display: block;</span></span>
<span class="line"><span style="color:#c9d1d9;">      font-size: 2em;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    // 6. Sub selectors</span></span>
<span class="line"><span style="color:#c9d1d9;">    &gt; .content &gt; .title {</span></span>
<span class="line"><span style="color:#c9d1d9;">      font-size: 1.2em;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">      // 6.5. Contextual media queries in sub selector</span></span>
<span class="line"><span style="color:#c9d1d9;">      @media screen and (max-width: 640px) {</span></span>
<span class="line"><span style="color:#c9d1d9;">        letter-spacing: 0.2em;</span></span>
<span class="line"><span style="color:#c9d1d9;">        text-transform: uppercase;</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_13-\u7279\u6B8A\u89C4\u8303" tabindex="-1">13 \u7279\u6B8A\u89C4\u8303 <a class="header-anchor" href="#_13-\u7279\u6B8A\u89C4\u8303" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u7528\u9875\u9762\u7EA7\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u5E94\u8BE5\u662F\u6709\u4F5C\u7528\u57DF\u7684</li><li>\u5BF9\u4E8E\u516C\u7528\u7EC4\u4EF6\u6216\u8005\u5168\u5C40\u7EC4\u4EF6\u5E93\uFF0C\u6211\u4EEC\u5E94\u8BE5\u66F4\u503E\u5411\u4E8E\u9009\u7528\u57FA\u4E8E class \u7684 BEM \u7B56\u7565</li></ul><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;style lang=&#39;scss&#39;&gt;&lt;/style&gt; // bad</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;!-- \u4F7F\u7528 scoped \u4F5C\u7528\u57DF --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;style lang=&#39;scss&#39; scoped&gt;&lt;/style&gt; // good</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;!-- \u4F7F\u7528 BEM \u7EA6\u5B9A --&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;style&gt; // good</span></span>
<span class="line"><span style="color:#c9d1d9;">  .c-Button {</span></span>
<span class="line"><span style="color:#c9d1d9;">    border: none;</span></span>
<span class="line"><span style="color:#c9d1d9;">    border-radius: 2px;</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">  .c-Button--close {</span></span>
<span class="line"><span style="color:#c9d1d9;">    background-color: red;</span></span>
<span class="line"><span style="color:#c9d1d9;">  }</span></span>
<span class="line"><span style="color:#c9d1d9;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="_14-\u53C2\u8003" tabindex="-1">14 \u53C2\u8003 <a class="header-anchor" href="#_14-\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844903652096770055" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903652096770055</a></p>`,62);function v(m,h,b,f,_,k){const e=a("abcd-date-picker"),c=a("abcd-table");return t(),d("div",null,[r,n("div",y,[u,n("p",null,[s("\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u9700\u8981\u524D\u540E\u95ED\u5408\uFF0C\u5E76\u4EE5\u77ED\u7EBF\u5206\u9694\uFF0C\u5982\uFF08"),l(e),s("\uFF0C"),l(c),s("\uFF09")])]),g])}var w=o(i,[["render",v]]);export{q as __pageData,w as default};
