import{_ as s,o as a,c as n,a as l}from"./app.2a154df8.js";const B=JSON.parse('{"title":"ArrayList\u6269\u5BB9\u673A\u5236\u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 ArrayList \u6210\u5458\u53D8\u91CF","slug":"_01-arraylist-\u6210\u5458\u53D8\u91CF"},{"level":2,"title":"02 ArrayList \u6784\u9020\u65B9\u6CD5","slug":"_02-arraylist-\u6784\u9020\u65B9\u6CD5"},{"level":2,"title":"03 ArrayList \u6269\u5BB9\u673A\u5236","slug":"_03-arraylist-\u6269\u5BB9\u673A\u5236"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"src/case/example/ArrayList\u6269\u5BB9\u673A\u5236\u89E3\u6790.md","lastUpdated":1697524142000}'),p={name:"src/case/example/ArrayList\u6269\u5BB9\u673A\u5236\u89E3\u6790.md"},o=l(`<h1 id="arraylist\u6269\u5BB9\u673A\u5236\u89E3\u6790" tabindex="-1">ArrayList\u6269\u5BB9\u673A\u5236\u89E3\u6790 <a class="header-anchor" href="#arraylist\u6269\u5BB9\u673A\u5236\u89E3\u6790" aria-hidden="true">#</a></h1><h2 id="_01-arraylist-\u6210\u5458\u53D8\u91CF" tabindex="-1">01 ArrayList \u6210\u5458\u53D8\u91CF <a class="header-anchor" href="#_01-arraylist-\u6210\u5458\u53D8\u91CF" aria-hidden="true">#</a></h2><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">// \u9ED8\u8BA4\u521D\u59CB\u5316\u5927\u5C0F</span></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">DEFAULT_CAPACITY</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u7A7A\u6570\u7EC4\uFF08\u7528\u4E8E\u7A7A\u5B9E\u4F8B\uFF09</span></span>
<span class="line"><span style="color:#8B949E;">// \u6BD4\u5982List&lt;String&gt; ls = new ArrayList&lt;&gt;(0);</span></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">Object</span><span style="color:#FFA657;">[] </span><span style="color:#C9D1D9;">EMPTY_ELEMENTDATA</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u4E3B\u8981\u7528\u6765\u6807\u8BC6\u8BE5ArrayList\u4F7F\u7528\u65E0\u53C2\u6784\u9020\u65B9\u6CD5\u8FDB\u884C\u4E86\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#8B949E;">// elementData\u7B49\u4E8EDEFAULTCAPACITY_EMPTY_ELEMENTDATA\u610F\u5473\u7740\u4F7F\u7528\u65E0\u53C2\u6784\u9020\u51FD\u6570\u8FDB\u884C\u4E86\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#8B949E;">// \u4F7F\u7528\u65E0\u53C2\u6784\u9020\u51FD\u6570\u7684\u9ED8\u8BA4\u5BB9\u91CF\u662F10\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u4E00\u5F00\u59CB\u5C31\u8FDB\u884C\u4E86\u521D\u59CB\u5316\uFF0C\u800C\u662F\u771F\u6B63\u5728\u63D2\u5165\u5143\u7D20\u7684\u65F6\u5019\u624D\u8FDB\u884C\u4E86\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">Object</span><span style="color:#FFA657;">[] </span><span style="color:#C9D1D9;">DEFAULTCAPACITY_EMPTY_ELEMENTDATA</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u5B9E\u9645\u4E0A\u4FDD\u5B58ArrayList\u6570\u636E\u7684\u6570\u7EC4</span></span>
<span class="line"><span style="color:#FF7B72;">transient</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">Object</span><span style="color:#FFA657;">[] </span><span style="color:#C9D1D9;">elementData; </span><span style="color:#8B949E;">// non-private to simplify nested class access</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// ArrayList\u5305\u542B\u7684\u5143\u7D20\u4E2A\u6570</span></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">size;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_02-arraylist-\u6784\u9020\u65B9\u6CD5" tabindex="-1">02 ArrayList \u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#_02-arraylist-\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">// \u6709\u53C2\u6784\u9020\u65B9\u6CD5\uFF0C\u7531\u81EA\u5DF1\u8FDB\u884C\u5BB9\u91CF\u7684\u521D\u59CB\u5316</span></span>
<span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ArrayList</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> initialCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (initialCapacity </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u503C\u5927\u4E8E0\uFF0C\u521B\u5EFAinitialCapacity\u5927\u5C0F\u7684\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">[initialCapacity];</span></span>
<span class="line"><span style="color:#C9D1D9;">    } </span><span style="color:#FF7B72;">else</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (initialCapacity </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u503C\u7B49\u4E8E0\uFF0C\u5219\u521B\u5EFA\u7A7A\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span style="color:#C9D1D9;">    } </span><span style="color:#FF7B72;">else</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u503C\u5C0F\u4E8E0\uFF0C\u629B\u51FA\u5F02\u5E38</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">throw</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">IllegalArgumentException</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Illegal Capacity: &quot;</span><span style="color:#FF7B72;">+</span></span>
<span class="line"><span style="color:#C9D1D9;">                                           initialCapacity);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// DEFAULTCAPACITY_EMPTY_ELEMENTDATA\u4E3A0.\u521D\u59CB\u5316\u4E3A10</span></span>
<span class="line"><span style="color:#8B949E;">// \u610F\u5473\u7740ArrayList\u7684\u521D\u59CB\u5176\u5B9E\u662F\u7A7A\u6570\u7EC4\uFF0C\u5F53\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u65F6\u5019\u6570\u7EC4\u5BB9\u91CF\u624D\u53D8\u621010</span></span>
<span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ArrayList</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> DEFAULTCAPACITY_EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u6784\u9020\u4E00\u4E2A\u5305\u542B\u6307\u5B9A\u96C6\u5408\u7684\u5143\u7D20\u7684\u5217\u8868\uFF0C\u6309\u7167\u5B83\u4EEC\u7531\u96C6\u5408\u7684\u8FED\u4EE3\u5668\u8FD4\u56DE\u7684\u987A\u5E8F\u3002</span></span>
<span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ArrayList</span><span style="color:#C9D1D9;">(Collection</span><span style="color:#FF7B72;">&lt;?</span><span style="color:#C9D1D9;"> extends E</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> c) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> c.</span><span style="color:#D2A8FF;">toArray</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> ((size </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> elementData.length) </span><span style="color:#FF7B72;">!=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u5982\u679CelementData\u4E0D\u662FObject\u7C7B\u578B\u6570\u636E\uFF08c.toArray\u53EF\u80FD\u8FD4\u56DE\u7684\u4E0D\u662FObject\u7C7B\u578B\u7684\u6570\u7EC4\u6240\u4EE5\u52A0\u4E0A\u4E0B\u9762\u7684\u8BED\u53E5\u7528\u4E8E\u5224\u65AD\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (elementData.</span><span style="color:#D2A8FF;">getClass</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">!=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">[].class)</span></span>
<span class="line"><span style="color:#C9D1D9;">            elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Arrays.</span><span style="color:#D2A8FF;">copyOf</span><span style="color:#C9D1D9;">(elementData, size, </span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">[].class);</span></span>
<span class="line"><span style="color:#C9D1D9;">    } </span><span style="color:#FF7B72;">else</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> EMPTY_ELEMENTDATA;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_03-arraylist-\u6269\u5BB9\u673A\u5236" tabindex="-1">03 ArrayList \u6269\u5BB9\u673A\u5236 <a class="header-anchor" href="#_03-arraylist-\u6269\u5BB9\u673A\u5236" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u6269\u5BB9\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u5F53\u7136\u662F\u6DFB\u52A0\u5143\u7D20\uFF0C\u800CelementData\u7684\u5BB9\u91CF\u4E0D\u591F\u7684\u65F6\u5019\u8FDB\u884C\u6269\u5BB9\uFF0C\u6240\u4EE5\u6211\u4EEC\u4ECEadd()\u65B9\u6CD5\u8D77\u624B\u3002</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">boolean</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">add</span><span style="color:#C9D1D9;">(E e) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u9996\u5148\u662F\u5C06\u5F53\u524Dsize+1\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7136\u540E\u8C03\u7528ensureCapacityInternal\u5224\u65AD\u662F\u5426\u9700\u8981\u8FDB\u884C\u6269\u5BB9</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">ensureCapacityInternal</span><span style="color:#C9D1D9;">(size </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);  </span><span style="color:#8B949E;">// Increments modCount!!</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u6700\u540E\u5C06\u5143\u7D20\u653E\u5165\u5BB9\u91CF\u8DB3\u591F\u672A\u6269\u5BB9/\u5BB9\u91CF\u4E0D\u591F\u6269\u5BB9\u8FC7\u7684elementData\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">    elementData[size</span><span style="color:#FF7B72;">++</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> e;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8DDF\u8FDB ensureCapacityInternal \u65B9\u6CD5\uFF0C\u770B\u770B\u5230\u5E95\u53D1\u751F\u4E86\u4EC0\u4E48\u2026</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ensureCapacityInternal</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">ensureExplicitCapacity</span><span style="color:#C9D1D9;">(</span><span style="color:#D2A8FF;">calculateCapacity</span><span style="color:#C9D1D9;">(elementData, minCapacity));</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">calculateCapacity</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">Object</span><span style="color:#C9D1D9;">[] elementData, </span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 1.\u8BA1\u7B97\u6700\u5C0F\u6269\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5728\u524D\u9762\u4E5F\u8BF4\u8FC7\uFF0C\u5982\u679CelementData\u7B49\u4E8EDEFAULTCAPACITY_EMPTY_ELEMENTDATA</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5C31\u610F\u5473\u7740\u8BE5ArrayList\u521A\u521A\u8C03\u7528\u5B8C\u65E0\u53C2\u6784\u9020\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u5730\u65B9\u6B63\u662F\u8BE5ArrayList\u7B2C\u4E00\u6B21\u6DFB\u52A0\u5143\u7D20\uFF0C\u5C06\u5BB9\u91CF\u521D\u59CB\u5316\u4E3A10\u7684\u5730\u65B9</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (elementData </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Math.</span><span style="color:#D2A8FF;">max</span><span style="color:#C9D1D9;">(DEFAULT_CAPACITY, minCapacity);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u8FD4\u56DE\u6700\u5C0F\u6269\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> minCapacity;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ensureExplicitCapacity</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    modCount</span><span style="color:#FF7B72;">++</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 2.\u5224\u65AD\u662F\u5426\u9700\u8981\u8FDB\u884C\u6269\u5BB9</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5982\u679C\u6700\u5C0F\u9700\u8981\u7684\u5BB9\u91CF\u5927\u4E8E\u6570\u7EC4elementData\u7684\u5BB9\u91CF\uFF0C\u5C31\u610F\u5473\u7740\u8981\u8FDB\u884C\u6269\u5BB9\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u6CE8\u610F\uFF01\u4E0D\u8981\u628Asize\u548CelementData\u7684\u5BB9\u91CF\u5F04\u6DF7\u4E86\uFF0C\u4E00\u4E2A\u662FArrayList\u5F53\u524D\u5B58\u653E\u5143\u7D20\u7684\u4E2A\u6570\uFF0C\u4E00\u4E2A\u662F\u5F53\u524D\u5BB9\u91CF\u7684\u5927\u5C0F\uFF01</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (minCapacity </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> elementData.length </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 3.\u5982\u679C\u5224\u65AD\u9700\u8981\u8FDB\u884C\u6269\u5BB9\uFF0C\u5219\u8C03\u7528grow\u65B9\u6CD5\u8FDB\u884C\u6269\u5BB9</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">grow</span><span style="color:#C9D1D9;">(minCapacity);</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u4EE5\u4E0A\u51E0\u4E2A\u65B9\u6CD5\u7684\u6267\u884C\uFF0C\u5982\u679C\u786E\u5B9A\u6700\u5C0F\u9700\u6C42\u5BB9\u91CFminCapacity\u5927\u4E8E\u8BE5ArrayList\u7684\u5F53\u524D\u5BB9\u91CF\uFF0C\u5C31\u4F1A\u8C03\u7528grow()\u65B9\u6CD5\u8FDB\u884C\u6269\u5BB9\uFF0C\u6211\u4EEC\u518D\u7EE7\u7EED\u770Bgrow()\u65B9\u6CD5\u7684\u5185\u90E8\u5B9E\u73B0\u3002</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">grow</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5148\u83B7\u53D6\u65E7\u5BB9\u91CFoldCapacity</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// overflow-conscious code</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">oldCapacity</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> elementData.length;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u91C7\u7528\u53F3\u79FB\u8BA1\u7B97\uFF08\u6548\u7387\u66F4\u9AD8\uFF09\uFF0C\u5C06\u65B0\u5BB9\u91CFnewCapacity\u8D4B\u503C\u4E3A\u65E7\u5BB9\u91CFoldCapacity\u76841.5\u500D</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">newCapacity</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> oldCapacity </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> (oldCapacity </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u68C0\u67E5\u65B0\u5BB9\u91CF\u662F\u5426\u7B26\u5408\u6700\u5C0F\u5BB9\u91CF\u9700\u6C42\uFF0C\u5982\u679C\u65B0\u5BB9\u91CF\u5C0F\u4E8E\u6700\u5C0F\u5BB9\u91CF\u9700\u6C42\uFF0C\u5C31\u5C06\u65B0\u5BB9\u91CF\u8BBE\u8BA1\u4E3A\u6700\u5C0F\u5BB9\u91CF\u9700\u6C42</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (newCapacity </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> minCapacity </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">        newCapacity </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> minCapacity;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u518D\u68C0\u67E5\u65B0\u5BB9\u91CFnewCapacity\u662F\u5426\u8D85\u51FA\u4E86ArrayList\u7C7B\u6240\u5B9A\u4E49\u7684\u6700\u5927\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5982\u679C\u8D85\u51FA\u4E86\u90A3\u4E48\u5C31\u5C06\u65B0\u5BB9\u91CF\u8BBE\u7F6E\u4E3AInteger\u7684\u6700\u5927\u503C\uFF0C\u5426\u5219\u8BBE\u7F6E\u4E3AArraylist\u5B9A\u4E49\u7684\u6700\u5927\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (newCapacity </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> MAX_ARRAY_SIZE </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">        newCapacity </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">hugeCapacity</span><span style="color:#C9D1D9;">(minCapacity);</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u6700\u540E\u5C06elementData\u6309\u7167\u65B0\u5BB9\u91CFnewCapcity\u62F7\u8D1D\u5230\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#C9D1D9;">    elementData </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Arrays.</span><span style="color:#D2A8FF;">copyOf</span><span style="color:#C9D1D9;">(elementData, newCapacity);</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">hugeCapacity</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">int</span><span style="color:#C9D1D9;"> minCapacity) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (minCapacity </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) </span><span style="color:#8B949E;">// overflow</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">throw</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">OutOfMemoryError</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> (minCapacity </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> MAX_ARRAY_SIZE) </span><span style="color:#FF7B72;">?</span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer.MAX_VALUE </span><span style="color:#FF7B72;">:</span></span>
<span class="line"><span style="color:#C9D1D9;">        MAX_ARRAY_SIZE;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8BFB\u5230\u8FD9\u91CC\uFF0C\u53EF\u80FD\u4F60\u4F1A\u597D\u5947\u5173\u4E8E\u4E3A\u4EC0\u4E48ArrayList\u7684\u9ED8\u8BA4\u6700\u5927\u5BB9\u91CF\u4E3AInteger.MAX_VALUE - 8\uFF1F\u6211\u4EEC\u53EF\u4EE5\u8BE6\u7EC6\u770B\u4E00\u4E0B\u5173\u4E8E\u8FD9\u4E2A\u53D8\u91CF\u7684\u6CE8\u89E3</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * The maximum size of array to allocate.</span></span>
<span class="line"><span style="color:#8B949E;"> * Some VMs reserve some header words in an array.</span></span>
<span class="line"><span style="color:#8B949E;"> * Attempts to allocate larger arrays may result in</span></span>
<span class="line"><span style="color:#8B949E;"> * OutOfMemoryError: Requested array size exceeds VM limit</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#FF7B72;">private</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">MAX_ARRAY_SIZE</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.MAX_VALUE </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">8</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5927\u6982\u610F\u601D\u662F\u8BF4\uFF0C\u4E00\u4E9B\u865A\u62DF\u673A\u4F1A\u9884\u7559\u6570\u7EC4\u5934\u90E8\u7684\u5927\u5C0F\uFF0C\u4E00\u822C\u6570\u7EC4\u5934\u90E8\u67098\u4E2A\u5B57\u8282\uFF0C\u6240\u4EE5 \u8FD9\u91CC\u8981\u51CF\u6389\u5934\u90E8\u76848\u4E2A\u5B57\u8282\uFF0C \u4E0D\u7136\u7684\u8BDD\uFF0C\u6574\u4E2A\u6570\u7EC4\u5927\u5C0F\u5C31\u8D85\u8FC7int\u7684\u6700\u5927\u503C\u4E86\u3002\u5C31\u4F1A\u8DD1\u51FAOutOfMemoryError\u9519\u8BEF\u3002</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://blog.csdn.net/qq_52002412/article/details/129439421" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_52002412/article/details/129439421</a></p>`,17),e=[o];function t(c,r,y,D,i,F){return a(),n("div",null,e)}var A=s(p,[["render",t]]);export{B as __pageData,A as default};
