import{_ as s,o as n,c as a,a as l}from"./app.7a1de492.js";const p="/fe-series-notes/assets/image_zVsWEVIikA.4b99ecc2.png",o="/fe-series-notes/assets/image_k1nl5IkJLR.e2242e32.png",e="/fe-series-notes/assets/image_DbK8iAuosp.7cedaea4.png",c="/fe-series-notes/assets/1680416377724.28e89682.png",t="/fe-series-notes/assets/1680416395702.6bef2b20.png",B=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx \u7B80\u4ECB","slug":"nginx-\u7B80\u4ECB","link":"#nginx-\u7B80\u4ECB","children":[{"level":3,"title":"Nginx \u662F\u4EC0\u4E48","slug":"nginx-\u662F\u4EC0\u4E48","link":"#nginx-\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"nginx \u9002\u7528\u573A\u666F","slug":"nginx-\u9002\u7528\u573A\u666F","link":"#nginx-\u9002\u7528\u573A\u666F","children":[]},{"level":3,"title":"nginx \u5386\u53F2\u80CC\u666F","slug":"nginx-\u5386\u53F2\u80CC\u666F","link":"#nginx-\u5386\u53F2\u80CC\u666F","children":[]},{"level":3,"title":"nginx \u7684\u4F18\u70B9","slug":"nginx-\u7684\u4F18\u70B9","link":"#nginx-\u7684\u4F18\u70B9","children":[]}]},{"level":2,"title":"nginx \u7684\u5B89\u88C5\u548C\u4F7F\u7528","slug":"nginx-\u7684\u5B89\u88C5\u548C\u4F7F\u7528","link":"#nginx-\u7684\u5B89\u88C5\u548C\u4F7F\u7528","children":[{"level":3,"title":"\u5B89\u88C5 Nginx","slug":"\u5B89\u88C5-nginx","link":"#\u5B89\u88C5-nginx","children":[]},{"level":3,"title":"\u542F\u52A8 nginx","slug":"\u542F\u52A8-nginx","link":"#\u542F\u52A8-nginx","children":[]},{"level":3,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","link":"#\u5E38\u7528\u547D\u4EE4","children":[]}]},{"level":2,"title":"nginx \u914D\u7F6E","slug":"nginx-\u914D\u7F6E","link":"#nginx-\u914D\u7F6E","children":[{"level":3,"title":"\u6587\u4EF6\u7ED3\u6784","slug":"\u6587\u4EF6\u7ED3\u6784","link":"#\u6587\u4EF6\u7ED3\u6784","children":[]},{"level":3,"title":"\u8BED\u6CD5\u8BF4\u660E","slug":"\u8BED\u6CD5\u8BF4\u660E","link":"#\u8BED\u6CD5\u8BF4\u660E","children":[]},{"level":3,"title":"location \u5339\u914D\u89C4\u5219","slug":"location-\u5339\u914D\u89C4\u5219","link":"#location-\u5339\u914D\u89C4\u5219","children":[]},{"level":3,"title":"\u9884\u5B9A\u4E49\u53D8\u91CF","slug":"\u9884\u5B9A\u4E49\u53D8\u91CF","link":"#\u9884\u5B9A\u4E49\u53D8\u91CF","children":[]},{"level":3,"title":"\u4E00\u4E2A\u793A\u4F8B","slug":"\u4E00\u4E2A\u793A\u4F8B","link":"#\u4E00\u4E2A\u793A\u4F8B","children":[]},{"level":3,"title":"server \u865A\u62DF\u4E3B\u673A\u914D\u7F6E","slug":"server-\u865A\u62DF\u4E3B\u673A\u914D\u7F6E","link":"#server-\u865A\u62DF\u4E3B\u673A\u914D\u7F6E","children":[]},{"level":3,"title":"\u7F13\u5B58\u914D\u7F6E","slug":"\u7F13\u5B58\u914D\u7F6E","link":"#\u7F13\u5B58\u914D\u7F6E","children":[]},{"level":3,"title":"\u8DE8\u57DF\u914D\u7F6E","slug":"\u8DE8\u57DF\u914D\u7F6E","link":"#\u8DE8\u57DF\u914D\u7F6E","children":[]},{"level":3,"title":"\u53CD\u5411\u4EE3\u7406","slug":"\u53CD\u5411\u4EE3\u7406","link":"#\u53CD\u5411\u4EE3\u7406","children":[]},{"level":3,"title":"\u8D1F\u8F7D\u5747\u8861","slug":"\u8D1F\u8F7D\u5747\u8861","link":"#\u8D1F\u8F7D\u5747\u8861","children":[]},{"level":3,"title":"\u52A8\u9759\u5206\u79BB","slug":"\u52A8\u9759\u5206\u79BB","link":"#\u52A8\u9759\u5206\u79BB","children":[]},{"level":3,"title":"\u9002\u914D PC \u6216\u79FB\u52A8\u8BBE\u5907","slug":"\u9002\u914D-pc-\u6216\u79FB\u52A8\u8BBE\u5907","link":"#\u9002\u914D-pc-\u6216\u79FB\u52A8\u8BBE\u5907","children":[]},{"level":3,"title":"Gzip \u538B\u7F29","slug":"gzip-\u538B\u7F29","link":"#gzip-\u538B\u7F29","children":[]},{"level":3,"title":"\u56FE\u7247\u9632\u76D7\u94FE","slug":"\u56FE\u7247\u9632\u76D7\u94FE","link":"#\u56FE\u7247\u9632\u76D7\u94FE","children":[]}]},{"level":2,"title":"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B","slug":"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B","link":"#\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B","children":[{"level":3,"title":"TY-Store \u793A\u4F8B","slug":"ty-store-\u793A\u4F8B","link":"#ty-store-\u793A\u4F8B","children":[]}]},{"level":2,"title":"Nginx \u53EF\u89C6\u5316\u914D\u7F6E","slug":"nginx-\u53EF\u89C6\u5316\u914D\u7F6E","link":"#nginx-\u53EF\u89C6\u5316\u914D\u7F6E","children":[]},{"level":2,"title":"\u6DF1\u5165\u5B66\u4E60\u8BFE\u7A0B","slug":"\u6DF1\u5165\u5B66\u4E60\u8BFE\u7A0B","link":"#\u6DF1\u5165\u5B66\u4E60\u8BFE\u7A0B","children":[]}],"relativePath":"deploy/100-nginx.md","lastUpdated":1680417096000}'),r={name:"deploy/100-nginx.md"},i=l("",193),D=[i];function y(C,F,d,g,h,_){return n(),a("div",null,D)}const x=s(r,[["render",y]]);export{B as __pageData,x as default};