const fs = require("fs");
const path = require("path");
const sitemap = require("./gen-sitemap");

const SITE_TITLE = "青衫 Neuro";
const SITE_DESCRIPTION = "为神经多元群体提供支持";

/**
 * 解析 MDX 文件的前置信息 frontmatter
 * @param {string} fileContent - MDX 文件的原始内容
 * @returns {{metadata: Object, content: string}} 包含前置信息和正文内容的对象
 */
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const match = frontmatterRegex.exec(fileContent);
  if (!match) return { metadata: {}, content: fileContent };

  const frontMatterBlock = match[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

/**
 * 获取博客文章的前置信息并生成RSS所需数据
 * @param {string} postsDir - 博客文章目录
 * @returns {Array<{title: string, description: string, pubDate: string, link: string, content: string}>} 博客文章数据数组
 */
function getBlogPostsData(postsDir) {
  try {
    const extensions = [".mdx"];
    const allFiles = sitemap.getAllFiles(postsDir, [], extensions);

    // 过滤和处理文件
    const posts = allFiles.map((file) => {
      const relativePath = path
        .relative(process.cwd(), file)
        .replace(/\\/g, "/");
      const fileContent = fs.readFileSync(file, "utf-8");
      const { metadata, content } = parseFrontmatter(fileContent);

      // 从文件路径生成URL路径
      const url = sitemap.filePathToUrl(relativePath);

      // 如果没有发布日期，则使用当前日期
      const pubDate =
        metadata.pubDate || new Date().toISOString().split("T")[0];

      // 获取内容摘要（取内容的前200个字符）
      const contentPreview =
        content
          .replace(/<[^>]*>/g, " ") // 移除HTML标签
          .replace(/\s+/g, " ") // 替换多个空白为一个空格
          .trim()
          .slice(0, 200) + "...";

      return {
        title: metadata.title || path.basename(file, path.extname(file)),
        description: metadata.description || contentPreview,
        pubDate: pubDate,
        link: url,
        content: contentPreview,
      };
    });

    // 按发布日期排序（最新的在前）
    return posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  } catch (error) {
    console.error("获取博客文章数据时出错:", error);
    return [];
  }
}

/**
 * 转义XML特殊字符
 * @param {string} text - 要转义的文本
 * @returns {string} 转义后的文本
 */
function escapeXML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * 生成 RSS feed XML 文件
 */
async function generateRSS() {
  try {
    console.log("---Generating RSS---");

    const postsDir = path.join(process.cwd(), "src", "pages", "posts");
    const posts = getBlogPostsData(postsDir);

    console.log(`Collect ${posts.length} blog posts`);

    // 生成RSS XML
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <description>${SITE_DESCRIPTION}</description>
    <link>${sitemap.BASE_URL}</link>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${sitemap.BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXML(post.title)}</title>
      <link>${post.link}</link>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <guid>${post.link}</guid>
      <description>${escapeXML(post.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

    // 写入生成的RSS XML文件
    sitemap.writeOutputFiles(rss, "rss.xml");
  } catch (error) {
    console.error("Err RSS feed Generating:", error);
  }
}

module.exports = {
  SITE_TITLE,
  SITE_DESCRIPTION,
  parseFrontmatter,
  getBlogPostsData,
  escapeXML,
};

if (require.main === module) {
  generateRSS();
}
