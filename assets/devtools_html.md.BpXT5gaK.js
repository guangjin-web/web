import{_ as l,c as a,o as i,a4 as e}from"./chunks/framework.DkZrsx35.js";const t="/web/assets/image-16.O9hxUh75.png",u=JSON.parse('{"title":"浏览器渲染","description":"","frontmatter":{},"headers":[],"relativePath":"devtools/html.md","filePath":"devtools/html.md"}'),o={name:"devtools/html.md"},r=e('<h1 id="浏览器渲染" tabindex="-1">浏览器渲染 <a class="header-anchor" href="#浏览器渲染" aria-label="Permalink to &quot;浏览器渲染&quot;">​</a></h1><h2 id="html-性能一般注意事项" tabindex="-1">HTML 性能一般注意事项 <a class="header-anchor" href="#html-性能一般注意事项" aria-label="Permalink to &quot;HTML 性能一般注意事项&quot;">​</a></h2><ul><li>尽量减少重定向</li><li>缓存 HTML 响应</li><li>启用 http2</li><li>减少 HTTP 请求数</li><li>减少 DOM 节点数</li><li>减少 CSS 样式数</li><li>减少 JS 脚本数</li><li>减少图片数量</li><li>测量服务器响应时间</li><li>使用 CDN</li><li>压缩尽可能使用 Brotli，Brotli 提供了相当 与 gzip 相比，效果得到显著提升</li></ul><h2 id="渲染路径" tabindex="-1">渲染路径 <a class="header-anchor" href="#渲染路径" aria-label="Permalink to &quot;渲染路径&quot;">​</a></h2><ol><li><p>通过 HTML 构建文档对象模型 (DOM)。</p></li><li><p>通过 CSS 构建 CSS 对象模型 (CSSOM)。</p></li><li><p>应用任何会更改 DOM 或 CSSOM 的 JavaScript。</p></li><li><p>通过 DOM 和 CSSOM 构建渲染树。</p></li><li><p>在页面上执行样式和布局操作，看看哪些元素适合显示。</p></li><li><p>在内存中绘制元素的像素。</p></li><li><p>如果有任何像素重叠，则合成像素。</p></li><li><p>以物理方式将所有生成的像素绘制到屏幕上。</p><p><img src="'+t+'" alt="alt text"></p></li></ol><h3 id="关键渲染路径上有哪些资源" tabindex="-1">关键渲染路径上有哪些资源？ <a class="header-anchor" href="#关键渲染路径上有哪些资源" aria-label="Permalink to &quot;关键渲染路径上有哪些资源？&quot;">​</a></h3><ul><li>HTML 的一部分。</li><li><code>&lt;head&gt;</code> 元素中阻塞渲染的 CSS。</li><li><code>&lt;head&gt;</code> 元素中的阻塞渲染的 JavaScript。</li></ul><p>首次渲染时，浏览器通常不会等待：</p><ul><li>所有 HTML。</li><li>字体。</li><li>Images.</li><li><code>&lt;head&gt;</code> 元素外（例如，位于 HTML 末尾的 <code>&lt;script&gt;</code> 元素）之外的非阻塞渲染的 JavaScript。</li><li><code>&lt;head&gt;</code> 元素外或<a href="https://developer.mozilla.org/docs/Web/HTML/Element/link#conditionally_loading_resources_with_media_queries" target="_blank" rel="noreferrer"><code>media</code> 属性</a>值不适用于当前视口的 CSS，不会阻止内容渲染。</li></ul><h3 id="阻塞解析器的资源" tabindex="-1">阻塞解析器的资源 <a class="header-anchor" href="#阻塞解析器的资源" aria-label="Permalink to &quot;阻塞解析器的资源&quot;">​</a></h3><p>阻塞解析器的资源是指那些阻止浏览器通过继续解析 HTML 来寻找要执行的其他工作的资源。默认情况下，JavaScript 会阻塞解析器（除非明确标记为异步或延迟），因为 JavaScript 可能会在执行时更改 DOM 或 CSSOM。因此，在了解所请求 JavaScript 对网页 HTML 造成的全部影响之前，浏览器就不可能继续处理其他资源。因此，同步 JavaScript 会阻止解析器。</p><p>阻塞解析器的资源实际上也是阻碍呈现的。由于解析器在完成解析之前无法继续跳过会阻塞解析的资源，因此它无法访问和呈现它之后的内容。浏览器在等待期间可以呈现到目前为止所收到的任何 HTML，但在涉及关键呈现路径的情况下， <code>&lt;head&gt;</code>中任何阻止解析器的资源实际上意味着，所有网页内容都被阻止呈现。</p><p>阻塞解析器可能会消耗巨大的性能成本，远不止阻塞渲染的成本。因此，浏览器会使用辅助 HTML 解析器（称为预加载扫描程序）在主要 HTML 解析器被屏蔽时下载即将到来的资源，从而降低此成本。虽然不如实际解析 HTML 好，但至少允许浏览器中的网络功能先于被屏蔽的解析器运行，这意味着它将来再次被屏蔽的可能性更小。</p><h3 id="识别阻塞资源" tabindex="-1">识别阻塞资源 <a class="header-anchor" href="#识别阻塞资源" aria-label="Permalink to &quot;识别阻塞资源&quot;">​</a></h3><p>使用 Lighthouse 来识别阻塞渲染的资源</p>',15),d=[r];function c(h,p,s,n,_,S){return i(),a("div",null,d)}const M=l(o,[["render",c]]);export{u as __pageData,M as default};
