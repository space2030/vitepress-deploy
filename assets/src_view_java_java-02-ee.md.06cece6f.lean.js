import{_ as l,o as i,c as a,a as e}from"./app.2a154df8.js";const _=JSON.parse('{"title":"Java2 \u5E73\u53F0\u4F01\u4E1A\u7248","description":"","frontmatter":{},"headers":[{"level":2,"title":"JVM \u6027\u80FD\u4F18\u5316","slug":"jvm-\u6027\u80FD\u4F18\u5316"},{"level":2,"title":"01 Java\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"_01-java\u7C7B\u52A0\u8F7D\u8FC7\u7A0B"},{"level":2,"title":"02 Java\u5185\u5B58\u5206\u914D","slug":"_02-java\u5185\u5B58\u5206\u914D"},{"level":2,"title":"03 JVM\u52A0\u8F7DClass\u6587\u4EF6\u7684\u539F\u7406\u673A\u5236","slug":"_03-jvm\u52A0\u8F7Dclass\u6587\u4EF6\u7684\u539F\u7406\u673A\u5236"},{"level":2,"title":"04 GC","slug":"_04-gc"},{"level":2,"title":"05 GC\u5BF9\u8C61\u7684\u5224\u5B9A","slug":"_05-gc\u5BF9\u8C61\u7684\u5224\u5B9A"},{"level":2,"title":"06 \u5783\u573E\u56DE\u6536\u4F18\u70B9","slug":"_06-\u5783\u573E\u56DE\u6536\u4F18\u70B9"},{"level":2,"title":"07 \u5185\u5B58\u6CC4\u6F0F","slug":"_07-\u5185\u5B58\u6CC4\u6F0F"},{"level":2,"title":"08 finalize\u65B9\u6CD5","slug":"_08-finalize\u65B9\u6CD5"},{"level":2,"title":"09 \u5206\u5E03\u5F0F\u5783\u573E\u56DE\u6536","slug":"_09-\u5206\u5E03\u5F0F\u5783\u573E\u56DE\u6536"},{"level":2,"title":"10 \u5185\u5B58\u6A21\u578B\u4EE5\u53CA\u5206\u533A\uFF0C\u9700\u8981\u8BE6\u7EC6\u5230\u6BCF\u4E2A\u533A\u653E\u4EC0\u4E48\u3002","slug":"_10-\u5185\u5B58\u6A21\u578B\u4EE5\u53CA\u5206\u533A\uFF0C\u9700\u8981\u8BE6\u7EC6\u5230\u6BCF\u4E2A\u533A\u653E\u4EC0\u4E48\u3002"},{"level":2,"title":"11 \u5806\u91CC\u9762\u7684\u5206\u533A\uFF1AEden\uFF0Csurvival \uFF08from+ to\uFF09\uFF0C\u8001\u5E74\u4EE3\uFF0C\u5404\u81EA\u7684\u7279\u70B9\u3002","slug":"_11-\u5806\u91CC\u9762\u7684\u5206\u533A\uFF1Aeden\uFF0Csurvival-\uFF08from-to\uFF09\uFF0C\u8001\u5E74\u4EE3\uFF0C\u5404\u81EA\u7684\u7279\u70B9\u3002"},{"level":2,"title":"12 GC \u7684\u4E24\u79CD\u5224\u5B9A\u65B9\u6CD5\uFF1A","slug":"_12-gc-\u7684\u4E24\u79CD\u5224\u5B9A\u65B9\u6CD5\uFF1A"},{"level":2,"title":"13 SafePoint \u662F\u4EC0\u4E48","slug":"_13-safepoint-\u662F\u4EC0\u4E48"},{"level":2,"title":"14 \u5FAA\u73AF\u7684\u672B\u5C3E (\u9632\u6B62\u5927\u5FAA\u73AF\u7684\u65F6\u5019\u4E00\u76F4\u4E0D\u8FDB\u5165 safepoint\uFF0C\u800C\u5176\u4ED6\u7EBF\u7A0B\u5728\u7B49\u5F85\u5B83\u8FDB\u5165 safepoint)","slug":"_14-\u5FAA\u73AF\u7684\u672B\u5C3E-\u9632\u6B62\u5927\u5FAA\u73AF\u7684\u65F6\u5019\u4E00\u76F4\u4E0D\u8FDB\u5165-safepoint\uFF0C\u800C\u5176\u4ED6\u7EBF\u7A0B\u5728\u7B49\u5F85\u5B83\u8FDB\u5165-safepoint"},{"level":2,"title":"15 GC \u7684\u4E09\u79CD\u6536\u96C6\u65B9\u6CD5\uFF1A\u6807\u8BB0\u6E05\u9664\u3001\u6807\u8BB0\u6574\u7406\u3001\u590D\u5236\u7B97\u6CD5\u7684\u539F\u7406\u4E0E\u7279\u70B9\uFF0C\u5206\u522B\u7528\u5728\u4EC0\u4E48\u5730\u65B9\uFF0C\u5982\u679C\u8BA9\u4F60\u4F18\u5316\u6536\u96C6\u65B9\u6CD5\uFF0C\u6709\u4EC0\u4E48\u601D\u8DEF\uFF1F","slug":"_15-gc-\u7684\u4E09\u79CD\u6536\u96C6\u65B9\u6CD5\uFF1A\u6807\u8BB0\u6E05\u9664\u3001\u6807\u8BB0\u6574\u7406\u3001\u590D\u5236\u7B97\u6CD5\u7684\u539F\u7406\u4E0E\u7279\u70B9\uFF0C\u5206\u522B\u7528\u5728\u4EC0\u4E48\u5730\u65B9\uFF0C\u5982\u679C\u8BA9\u4F60\u4F18\u5316\u6536\u96C6\u65B9\u6CD5\uFF0C\u6709\u4EC0\u4E48\u601D\u8DEF\uFF1F"},{"level":2,"title":"16 GC \u6536\u96C6\u5668\u6709\u54EA\u4E9B\uFF1FCMS \u6536\u96C6\u5668\u4E0E G1 \u6536\u96C6\u5668\u7684\u7279\u70B9\u3002","slug":"_16-gc-\u6536\u96C6\u5668\u6709\u54EA\u4E9B\uFF1Fcms-\u6536\u96C6\u5668\u4E0E-g1-\u6536\u96C6\u5668\u7684\u7279\u70B9\u3002"},{"level":2,"title":"17 Minor GC \u4E0E Full GC \u5206\u522B\u5728\u4EC0\u4E48\u65F6\u5019\u53D1\u751F\uFF1F","slug":"_17-minor-gc-\u4E0E-full-gc-\u5206\u522B\u5728\u4EC0\u4E48\u65F6\u5019\u53D1\u751F\uFF1F"},{"level":2,"title":"18 \u51E0\u79CD\u5E38\u7528\u7684\u5185\u5B58\u8C03\u8BD5\u5DE5\u5177\uFF1Ajmap\u3001jstack\u3001jconsole\u3001jhat","slug":"_18-\u51E0\u79CD\u5E38\u7528\u7684\u5185\u5B58\u8C03\u8BD5\u5DE5\u5177\uFF1Ajmap\u3001jstack\u3001jconsole\u3001jhat"},{"level":2,"title":"19 \u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"_19-\u7C7B\u52A0\u8F7D\u8FC7\u7A0B"},{"level":2,"title":"20 JVM \u5185\u5B58\u5206\u54EA\u51E0\u4E2A\u533A\uFF0C\u6BCF\u4E2A\u533A\u7684\u4F5C\u7528\u662F\u4EC0\u4E48?","slug":"_20-jvm-\u5185\u5B58\u5206\u54EA\u51E0\u4E2A\u533A\uFF0C\u6BCF\u4E2A\u533A\u7684\u4F5C\u7528\u662F\u4EC0\u4E48"},{"level":2,"title":"21 \u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B\u6709\u4E24\u79CD\u65B9\u6CD5:","slug":"_21-\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B58\u6D3B\u6709\u4E24\u79CD\u65B9\u6CD5"},{"level":2,"title":"22 \u5783\u573E\u56DE\u6536\u673A\u5236","slug":"_22-\u5783\u573E\u56DE\u6536\u673A\u5236"},{"level":2,"title":"23 \u5783\u573E\u6536\u96C6\u7684\u65B9\u6CD5","slug":"_23-\u5783\u573E\u6536\u96C6\u7684\u65B9\u6CD5"},{"level":2,"title":"24 \u5185\u5B58\u6A21\u578B","slug":"_24-\u5185\u5B58\u6A21\u578B"},{"level":2,"title":"25 java \u7C7B\u52A0\u8F7D\u8FC7\u7A0B?","slug":"_25-java-\u7C7B\u52A0\u8F7D\u8FC7\u7A0B"},{"level":2,"title":"26 \u7B80\u8FF0 java \u7C7B\u52A0\u8F7D\u673A\u5236?","slug":"_26-\u7B80\u8FF0-java-\u7C7B\u52A0\u8F7D\u673A\u5236"},{"level":2,"title":"27 \u7C7B\u52A0\u8F7D\u5668\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u673A\u5236\uFF1F","slug":"_27-\u7C7B\u52A0\u8F7D\u5668\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u673A\u5236\uFF1F"},{"level":2,"title":"28 \u7C7B\u52A0\u8F7D\u5668","slug":"_28-\u7C7B\u52A0\u8F7D\u5668"},{"level":2,"title":"29 \u7B80\u8FF0 java \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536\u7B56\u7387\u4EE5\u53CA Minor GC \u548C Major GC","slug":"_29-\u7B80\u8FF0-java-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536\u7B56\u7387\u4EE5\u53CA-minor-gc-\u548C-major-gc"},{"level":2,"title":"30 \u7F51\u7EDC\u7F16\u7A0B","slug":"_30-\u7F51\u7EDC\u7F16\u7A0B"},{"level":2,"title":"31 \u7F51\u7EDC\u534F\u8BAE","slug":"_31-\u7F51\u7EDC\u534F\u8BAE"},{"level":2,"title":"32 TCP/IP\u53C2\u8003\u6A21\u578B","slug":"_32-tcp-ip\u53C2\u8003\u6A21\u578B"},{"level":2,"title":"33 TCP  vs  UDP","slug":"_33-tcp-vs-udp"},{"level":2,"title":"34 ARP\uFF08Address Resolution Protocol\uFF09","slug":"_34-arp\uFF08address-resolution-protocol\uFF09"},{"level":2,"title":"35 NAT\uFF08Network  Address  Translation\uFF0C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF09","slug":"_35-nat\uFF08network-address-translation\uFF0C\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF09"},{"level":2,"title":"36 JVM \u8C03\u4F18\u7684\u5DE5\u5177","slug":"_36-jvm-\u8C03\u4F18\u7684\u5DE5\u5177"},{"level":2,"title":"37 jvm \u8C03\u4F18","slug":"_37-jvm-\u8C03\u4F18"}],"relativePath":"src/view/java/java-02-ee.md","lastUpdated":1697523379000}'),s={name:"src/view/java/java-02-ee.md"},t=e("",105),o=[t];function r(c,d,n,h,u,p){return i(),a("div",null,o)}var m=l(s,[["render",r]]);export{_ as __pageData,m as default};