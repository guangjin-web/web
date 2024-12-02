import{_ as t,c as a,o as s,a4 as n}from"./chunks/framework.DkZrsx35.js";const e="/web/assets/image-1._feN4ZhW.png",m=JSON.parse('{"title":"文档字典","description":"","frontmatter":{},"headers":[],"relativePath":"opensource/explained.md","filePath":"opensource/explained.md"}'),p={name:"opensource/explained.md"},d=n(`<h1 id="文档字典" tabindex="-1">文档字典 <a class="header-anchor" href="#文档字典" aria-label="Permalink to &quot;文档字典&quot;">​</a></h1><h2 id="trailer-字典" tabindex="-1">Trailer 字典 <a class="header-anchor" href="#trailer-字典" aria-label="Permalink to &quot;Trailer 字典&quot;">​</a></h2><p>这个字典驻留在文件的 trailer 而不是文件的主体中，是程序想要读取 PDF 文档时要处理的第一件事。 它包含允许读取交叉引用表的条目，从而读取文件的对象。</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Size*</td><td>整数</td><td>文件交叉引用表中的条目总数（通常等于文件中的对象数加 1）</td></tr><tr><td>/Root*</td><td>间接引用字典</td><td>文件目录</td></tr><tr><td>/Info</td><td>间接引用字典</td><td>文档的文档信息字典</td></tr><tr><td>/ID</td><td>两个字符串的数组</td><td>唯一标识工作流程中的文件。第一个字符串在首次创建文件时确定，第二个字符串在工作流系统修改文件时进行修改</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;&lt;</span></span>
<span class="line"><span>   /Size 421</span></span>
<span class="line"><span>   /Root 377 0 R</span></span>
<span class="line"><span>   /Info 375 0 R</span></span>
<span class="line"><span>   /ID [&lt;75ff22189ceac848dfa2afec93deee03&gt; &lt;057928614d9711db835e000d937095a2&gt;]</span></span>
<span class="line"><span>&gt;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>一旦处理了 trailer 字典，我们就可以继续阅读文档信息字典和文档目录。</p><h2 id="文件信息字典" tabindex="-1">文件信息字典 <a class="header-anchor" href="#文件信息字典" aria-label="Permalink to &quot;文件信息字典&quot;">​</a></h2><p>文档信息字典条目</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Title</td><td>文本字符串</td><td>该文件的标题。请注意，这与第一页上显示的任何标题无关</td></tr><tr><td>/Subject</td><td>文本字符串</td><td>该文件的主题。同样，这只是元数据，没有关于内容的特定规则</td></tr><tr><td>/Keywords</td><td>文本字符串</td><td>与此文档相关的关键字。没有给出关于如何构建这些的建议</td></tr><tr><td>/Author</td><td>文本字符串</td><td>文件作者的姓名</td></tr><tr><td>/CreationDate</td><td>日期字符串</td><td>文档创建的日期</td></tr><tr><td>/ModDate</td><td>日期字符串</td><td>上次修改文档的日期</td></tr><tr><td>/Creator</td><td>文本字符串</td><td>最初创建此文档的程序的名称，如果它以另一种格式（例如，“Microsoft Word”）启动</td></tr><tr><td>/Producer</td><td>文本字符串</td><td>将此文件转换为 PDF 的程序的名称，如果它以另一种格式（例如，字处理器的格式）启动</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Example 4-1. Typical document information dictionary</span></span>
<span class="line"><span>&lt;&lt;</span></span>
<span class="line"><span>   /ModDate (D:20060926213913+02&#39;00&#39;)</span></span>
<span class="line"><span>   /CreationDate (D:20060926213913+02&#39;00&#39;)</span></span>
<span class="line"><span>   /Title (catalogueproduit-UK.qxd)</span></span>
<span class="line"><span>   /Creator (QuarkXPress: pictwpstops filter 1.0)</span></span>
<span class="line"><span>   /Producer (Acrobat Distiller 6.0 for Macintosh)</span></span>
<span class="line"><span>   /Author (James Smith)</span></span>
<span class="line"><span>&gt;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="文件目录" tabindex="-1">文件目录 <a class="header-anchor" href="#文件目录" aria-label="Permalink to &quot;文件目录&quot;">​</a></h2><p>文档目录是主对象图的根对象，可以通过间接引用从中到达所有其他对象</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Type*</td><td>name</td><td>必须是/Catalog</td></tr><tr><td>/Pages*</td><td>间接引用字典</td><td>页面树的根节点。</td></tr><tr><td>/PageLabels</td><td>number tree</td><td>一个数字树，给出了该文档的页面标签。这种机制允许文档中的页面具有比 1,2,3 更复杂的编号….例如，书籍的前言可以编号为 i，ii，iii ……，而主要内容 再次以 1,2,3 开始….这些页面标签显示在 PDF 查看器中 - 它们与打印输出无关</td></tr><tr><td>/Names</td><td>dictionary</td><td>名字词典。它包含各种名称树，它们将名称映射到实体，以防止必须使用对象编号直接引用它们</td></tr><tr><td>/Dests</td><td>dictionary</td><td>将名称映射到目标的字典。目的地是超链接向用户发送的 PDF 文档中的位置的描述</td></tr><tr><td>/ViewerPreferences</td><td>dictionary</td><td>一个查看器首选项字典，允许标志指定在屏幕上查看文档时的 PDF 查看器的行为，例如打开文档的页面，初始查看比例等</td></tr><tr><td>/PageLayout</td><td>name</td><td>指定 PDF 查看器要使用的页面布局。值为/SinglePage，/OneColumn，/TwoColumnLeft，/TwoColumnRight，/TwoPageLeft，/TwoPageRight。（默认值：/SinglePage）。详情见 ISO 32000-1:2008 的表 28</td></tr><tr><td>/PageMode</td><td>name</td><td>指定 PDF 查看器要使用的页面模式。值为/UseNone，/UseOutlines，/UseThumbs，/FullScreen，/UseOC，/UseAttachments。 （默认值：/UseNone）。</td></tr><tr><td>/Outlines</td><td>间接引用字典</td><td>大纲字典是文档大纲的根，通常称为书签</td></tr><tr><td>/Metadata</td><td>间接引用流</td><td>文档的 XMP 元数据</td></tr></tbody></table><h2 id="页面和页面树" tabindex="-1">页面和页面树 <a class="header-anchor" href="#页面和页面树" aria-label="Permalink to &quot;页面和页面树&quot;">​</a></h2><p>PDF 文档中的页面字典汇集了使用这些指令使用的资源（字体，图像和其他外部数据）绘制图形和文本内容的说明。 它还包括页面大小，以及定义裁剪等的许多其他框。</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Type*</td><td>name</td><td>必须是/Pages</td></tr><tr><td>/Parent*</td><td>间接引用字典</td><td>页面树中此节点的父节点</td></tr><tr><td>/Resources</td><td>dictionary</td><td>页面的资源（字体，图像等）。如果完全省略此条目，则资源将从页面树中的父节点继承。如果确实没有资源，请包含此条目但使用空字典</td></tr><tr><td>/Contents</td><td>indirect reference to stream or array of such references</td><td>一个或多个部分中页面的图形内容。如果缺少此条目，则页面为空</td></tr><tr><td>/Rotate</td><td>整数</td><td>页面的查看旋转，以度为单位，从北向顺时针。值必须是 90 的倍数。默认值：0。这适用于查看和打印。如果缺少此条目，则其值将从页面树中的父节点继承</td></tr><tr><td>/MediaBox*</td><td>rectangle</td><td>页面的媒体框（媒体大小，即纸张）。对于大多数用途，页面大小。如果缺少此条目，则它将从页面树中的父节点继承</td></tr><tr><td>/CropBox</td><td>rectangle</td><td>页面的裁剪框。这定义了在显示或打印页面时默认可见的页面区域。如果不存在，则将其值定义为与媒体框相同</td></tr></tbody></table><p>媒体盒和其他框的矩形数据结构是四个数字的数组。这些定义了矩形的对角相对的角 - 数组的前两个元素是一个角的 x 和 y 坐标，后两个元素是另一个角的 x 和 y 坐标。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/MediaBox [0 0 500 800]</span></span>
<span class="line"><span>/CropBox [100 100 400 700]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>定义一个 500 x 800 点的页面，裁剪框在页面的每一侧删除 100 个点。</p><p>页面使用页面树而不是简单的数组链接在一起。这种树结构使得在具有数百或数千页的文档中查找给定页面变得更快。 好的 PDF 应用程序构建了一个平衡树（一个节点数量最小的树）。这可确保快速定位特定页面。没有子节点的节点就是页面本身。</p><p><img src="https://zxyle.github.io/PDF-Explained/images/figure%204-2.png" alt=""></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1 0 obj Root node</span></span>
<span class="line"><span>&lt;&lt; /Type /Pages /Kids [2 0 R 3 0 R 4 0 R] /Count 7 &gt;&gt;</span></span>
<span class="line"><span>endobj</span></span>
<span class="line"><span>2 0 obj Intermediate node</span></span>
<span class="line"><span>&lt;&lt; /Type /Pages /Kids [5 0 R 6 0 R 7 0 R] /Parent 1 0 R /Count 3 &gt;&gt; endobj</span></span>
<span class="line"><span>3 0 obj Intermediate node</span></span>
<span class="line"><span>&lt;&lt; /Type /Pages /Kids [8 0 R 9 0 R 10 0 R] /Parent 1 0 R /Count 3 &gt;&gt; endobj</span></span>
<span class="line"><span>4 0 obj Page 7</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 1 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>5 0 obj Page 1</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 2 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>6 0 obj Page 2</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 2 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>7 0 obj Page 3</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 2 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>8 0 obj Page 4</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 3 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>9 0 obj Page 5</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 3 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span>
<span class="line"><span>10 0 obj Page 6</span></span>
<span class="line"><span>&lt;&lt; /Type /Page /Parent 3 0 R /MediaBox [0 0 500 500] /Resources &lt;&lt; &gt;&gt; &gt;&gt; endobj</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Type*</td><td>name</td><td>必须是/Pages</td></tr><tr><td>/Kids*</td><td>间接引用数组</td><td>此节点的直接子页面树节点</td></tr><tr><td>/Count*</td><td>整数</td><td>页节点（不是其他页面树节点）的数量，它们是此节点的最终子节点</td></tr><tr><td>/Parent</td><td>间接引用页面树节点</td><td>引用此节点的父节点（此节点是其子节点）。如果不是页面树的根节点，则必须存在</td></tr></tbody></table><h2 id="文档元数据和导航" tabindex="-1">文档元数据和导航 <a class="header-anchor" href="#文档元数据和导航" aria-label="Permalink to &quot;文档元数据和导航&quot;">​</a></h2><h3 id="书签和-destinations" tabindex="-1">书签和 Destinations <a class="header-anchor" href="#书签和-destinations" aria-label="Permalink to &quot;书签和 Destinations&quot;">​</a></h3><p>文档大纲是条目树(通常是章节，章节，段落等的标题)。Destinations 定义了超链接的页面位置。书签是具有目的地和可选子项的书签树。</p><table><thead><tr><th>数组</th><th>描述</th></tr></thead><tbody><tr><td>[page /Fit]</td><td>以水平和垂直方向适合窗口中整个页面的比例显示页面</td></tr><tr><td>[page /FitH top]</td><td>显示窗口顶部边缘垂直坐标顶部的页面，并设置放大倍率以水平放置文档</td></tr><tr><td>[page /FitV left]</td><td>显示窗口左边缘水平坐标的页面，并设置放大倍率以垂直放置文档</td></tr><tr><td>[page /XYZ left top zoom]</td><td>在窗口的左上角显示（左，上）页面，并通过因子缩放放大页面。任何参数的空值表示没有变化</td></tr><tr><td>[page /FitR left bottom right top]</td><td>显示缩放的页面以显示由 left，bottom，right 和 top 指定的矩形</td></tr><tr><td>[page /FitB]</td><td>显示像/Fit 这样的页面，但使用页面内容的边界框，而不是裁剪框</td></tr><tr><td>[page /FitBH top]</td><td>显示像/FitH 这样的页面，但使用页面内容的边界框，而不是裁剪框</td></tr><tr><td>[page /FitBV left]</td><td>显示像/FitV 这样的页面，但使用页面内容的边界框，而不是裁剪框</td></tr></tbody></table><p>The Document Outline(Bookmarks)</p><p>文档大纲由大纲条目树和大量项目词典定义的大纲条目树组成。大纲字典由文档目录中的/Outlines 条目指向。条目的子条目（子）可以默认显示（打开）或默认隐藏，仅通过单击（关闭）显示。</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Type</td><td>name</td><td>如果存在，必须是/Outlines</td></tr><tr><td>/First</td><td>间接引用字典</td><td>文档大纲中第一个顶级项的大纲项字典。如果存在任何文档大纲条目，则必需</td></tr><tr><td>/Last</td><td>间接引用字典</td><td>文档大纲中最后一个顶级项的大纲项字典。如果存在任何文档大纲条目，则必需</td></tr><tr><td>/Count</td><td>整数</td><td>大纲所有部分中的开放大纲条目总数。如果没有打开的条目，可以省略</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>8 0 obj</span></span>
<span class="line"><span>&lt;&lt; /Parent 10 0 R /Title (Part endobj</span></span>
<span class="line"><span>9 0 obj</span></span>
<span class="line"><span>&lt;&lt; /Parent 10 0 R /Title (Part endobj</span></span>
<span class="line"><span>10 0 obj</span></span>
<span class="line"><span>&lt;&lt; /Parent 11 0 R /First 9 0 R endobj</span></span>
<span class="line"><span>11 0 obj</span></span>
<span class="line"><span>&lt;&lt; /First 10 0 R /Last 10 0 R endobj</span></span>
<span class="line"><span>12 0 obj</span></span>
<span class="line"><span>&lt;&lt; /Outlines 11 0 R /Pages 1 0</span></span>
<span class="line"><span>1B) /Dest [ 7 0 R /Fit ] /Prev 9 0 R &gt;&gt;</span></span>
<span class="line"><span>1A) /Dest [ 5 0 R /Fit ] /Next 8 0 R &gt;&gt;</span></span>
<span class="line"><span>/Dest [ 3 0 R /Fit ] /Title (Part 1) /Last 8 0 R &gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;</span></span>
<span class="line"><span>R /Type /Catalog &gt;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="注释和超链接" tabindex="-1">注释和超链接 <a class="header-anchor" href="#注释和超链接" aria-label="Permalink to &quot;注释和超链接&quot;">​</a></h3><p>PDF 中使用注释在页面内容本身之外添加注释或交互元素。</p><table><thead><tr><th>键</th><th>值类型</th><th>值</th></tr></thead><tbody><tr><td>/Type</td><td>name</td><td>如果存在，必须是/Annot</td></tr><tr><td>/Subtype*</td><td>name</td><td>此批注的类型</td></tr><tr><td>/Rect*</td><td>rectangle</td><td>默认用户空间单位中注释的位置和大小</td></tr><tr><td>/Contents</td><td>text string</td><td>此注释的文本内容，或者如果没有，则是备用的人类可读描述</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>6 0 obj</span></span>
<span class="line"><span>&lt;&lt;</span></span>
<span class="line"><span>  /Subtype /Text</span></span>
<span class="line"><span>  /Open true</span></span>
<span class="line"><span>  /Contents (An example text annotation) /Type /Annot</span></span>
<span class="line"><span>  /Rect [400 100 500 200]</span></span>
<span class="line"><span>  /C [1 1 1] RGB (1, 1, 1) i.e., White</span></span>
<span class="line"><span>&gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/Annots [6 0 R] Extra entry in page dictionary</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+e+'" alt="alt text"></p>',36),l=[d];function r(i,o,c,b,u,h){return s(),a("div",null,l)}const P=t(p,[["render",r]]);export{m as __pageData,P as default};
