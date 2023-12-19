import{_ as s,o as a,c as n,a as l}from"./app.2a154df8.js";const C=JSON.parse('{"title":"oracle","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 \u521D\u59CB\u5316","slug":"_01-\u521D\u59CB\u5316"},{"level":2,"title":"02 \u91CD\u65B0\u767B\u5F55","slug":"_02-\u91CD\u65B0\u767B\u5F55"},{"level":2,"title":"03 \u5E38\u89C1\u95EE\u9898\u6570\u636E\u5E93\u672A\u6253\u5F00","slug":"_03-\u5E38\u89C1\u95EE\u9898\u6570\u636E\u5E93\u672A\u6253\u5F00"},{"level":2,"title":"04 \u5E38\u89C1\u95EE\u9898\u5220\u9664\u8868\u7A7A\u95F4","slug":"_04-\u5E38\u89C1\u95EE\u9898\u5220\u9664\u8868\u7A7A\u95F4"},{"level":2,"title":"05 \u8FDE\u63A5","slug":"_05-\u8FDE\u63A5"},{"level":2,"title":"06 ROOT \u6A21\u5F0F","slug":"_06-root-\u6A21\u5F0F"}],"relativePath":"src/deploy/oracle\u90E8\u7F72.md","lastUpdated":1697420719000}'),e={name:"src/deploy/oracle\u90E8\u7F72.md"},p=l(`<h1 id="oracle" tabindex="-1">oracle <a class="header-anchor" href="#oracle" aria-hidden="true">#</a></h1><h2 id="_01-\u521D\u59CB\u5316" tabindex="-1">01 \u521D\u59CB\u5316 <a class="header-anchor" href="#_01-\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u767B\u5F55</span></span>
<span class="line"><span style="color:#C9D1D9;">conn sys/root as sysdba</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#FF7B72;">select</span><span style="color:#C9D1D9;"> instance_name from v$instance</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u8868\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#C9D1D9;">create tablespace scott_tb_space datafile </span><span style="color:#A5D6FF;">&#39;D/Program/Tool/Oracle/tbspace/scott_tb_space.dbf&#39;</span><span style="color:#C9D1D9;"> size 200m</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u521B\u5EFA\u7528\u6237</span></span>
<span class="line"><span style="color:#C9D1D9;">create user scott identified by tiger default tablespace scott_tb_space</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u6388\u6743</span></span>
<span class="line"><span style="color:#C9D1D9;">grant dba to scott</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_02-\u91CD\u65B0\u767B\u5F55" tabindex="-1">02 \u91CD\u65B0\u767B\u5F55 <a class="header-anchor" href="#_02-\u91CD\u65B0\u767B\u5F55" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">conn scott/tiger@xe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">select</span><span style="color:#C9D1D9;"> * from dual</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_03-\u5E38\u89C1\u95EE\u9898\u6570\u636E\u5E93\u672A\u6253\u5F00" tabindex="-1">03 \u5E38\u89C1\u95EE\u9898\u6570\u636E\u5E93\u672A\u6253\u5F00 <a class="header-anchor" href="#_03-\u5E38\u89C1\u95EE\u9898\u6570\u636E\u5E93\u672A\u6253\u5F00" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u8FDE\u63A5</span></span>
<span class="line"><span style="color:#C9D1D9;">conn sys/root as sysdba</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u9A6C\u4E0A\u5173\u95ED\u5F00\u542F\u7684\u5E94\u7528\uFF08\u7EC8\u6B62\u5F53\u524D\u8FDB\u7A0B\uFF09</span></span>
<span class="line"><span style="color:#C9D1D9;">shutdown immediate</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u5F00\u542F\u5F53\u524D\u5E94\u7528</span></span>
<span class="line"><span style="color:#C9D1D9;">startup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u4ECE\u63A7\u5236\u6587\u4EF6\u4E2D\u83B7\u53D6\u6570\u636E\u5E93\u67D0\u57FA\u8868\u4E0B\u7684name</span></span>
<span class="line"><span style="color:#FF7B72;">select</span><span style="color:#C9D1D9;">   name   from  v$datafile</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#offline drop\u547D\u4EE4\u76F8\u5F53\u4E8E\u628A\u4E00\u4E2A\u6570\u636E\u6587\u4EF6\u81F3\u4E8E\u79BB\u7EBF\u72B6\u6001</span></span>
<span class="line"><span style="color:#C9D1D9;">alter database  datafile  </span><span style="color:#A5D6FF;">&#39;D:\\PROGRAM\\DATAGRIP\\ORACLE\\TBSPACE\\SCOTT_TB_SPACE.DBF&#39;</span><span style="color:#C9D1D9;"> offline</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">#\u662F\u5C06\u6570\u636E\u6587\u4EF6\u7684\u72B6\u6001\u66F4\u6539\u4E3A recover </span></span>
<span class="line"><span style="color:#C9D1D9;">alter database  datafile  </span><span style="color:#A5D6FF;">&#39;D:\\PROGRAM\\DATAGRIP\\ORACLE\\TBSPACE\\SCOTT_TB_SPACE.DBF&#39;</span><span style="color:#C9D1D9;"> offline drop</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_04-\u5E38\u89C1\u95EE\u9898\u5220\u9664\u8868\u7A7A\u95F4" tabindex="-1">04 \u5E38\u89C1\u95EE\u9898\u5220\u9664\u8868\u7A7A\u95F4 <a class="header-anchor" href="#_04-\u5E38\u89C1\u95EE\u9898\u5220\u9664\u8868\u7A7A\u95F4" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># \u5220\u9664\u8868\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#C9D1D9;">drop tablespace scott_tb_space including contents and datafiles</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_05-\u8FDE\u63A5" tabindex="-1">05 \u8FDE\u63A5 <a class="header-anchor" href="#_05-\u8FDE\u63A5" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;"># DataGrip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">HOST: localhost</span></span>
<span class="line"><span style="color:#C9D1D9;">SID: XE</span></span>
<span class="line"><span style="color:#C9D1D9;">Authentication: User </span><span style="color:#FF7B72;">&amp;</span><span style="color:#C9D1D9;"> Password</span></span>
<span class="line"><span style="color:#C9D1D9;">User: scott</span></span>
<span class="line"><span style="color:#C9D1D9;">Password: tiger</span></span>
<span class="line"><span style="color:#C9D1D9;">URL: jdbc:oracle:thin:@localhost:1521:XE</span></span>
<span class="line"></span></code></pre></div><h2 id="_06-root-\u6A21\u5F0F" tabindex="-1">06 ROOT \u6A21\u5F0F <a class="header-anchor" href="#_06-root-\u6A21\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>ROOT\u6A21\u5F0F\uFF08root\u5C31\u662F\u666E\u901A\u7528\u6237\uFF09</p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">create tablespace myspace datafile </span><span style="color:#A5D6FF;">&#39;D:\\Program\\Tool\\Oracle\\myspace\\myspace.dbf&#39;</span><span style="color:#C9D1D9;"> size 500m autoextend on next 20m</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">create user root identified by root default tablespace myspace</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u6388\u6743</span></span>
<span class="line"><span style="color:#C9D1D9;">grant dba to root</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># \u6D4B\u8BD5sql\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">D:</span><span style="color:#79C0FF;">\\P</span><span style="color:#C9D1D9;">rogram</span><span style="color:#79C0FF;">\\T</span><span style="color:#C9D1D9;">ool</span><span style="color:#79C0FF;">\\O</span><span style="color:#C9D1D9;">racle</span><span style="color:#79C0FF;">\\o</span><span style="color:#C9D1D9;">raclexe</span><span style="color:#79C0FF;">\\a</span><span style="color:#C9D1D9;">pp</span><span style="color:#79C0FF;">\\o</span><span style="color:#C9D1D9;">racle</span><span style="color:#79C0FF;">\\p</span><span style="color:#C9D1D9;">roduct</span><span style="color:#79C0FF;">\\1</span><span style="color:#C9D1D9;">1.2.0</span><span style="color:#79C0FF;">\\s</span><span style="color:#C9D1D9;">erver</span><span style="color:#79C0FF;">\\r</span><span style="color:#C9D1D9;">dbms</span><span style="color:#79C0FF;">\\a</span><span style="color:#C9D1D9;">dmin</span><span style="color:#79C0FF;">\\s</span><span style="color:#C9D1D9;">cott.sql</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,14),o=[p];function c(t,r,i,d,y,D){return a(),n("div",null,o)}var _=s(e,[["render",c]]);export{C as __pageData,_ as default};
