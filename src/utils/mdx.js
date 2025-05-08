import fs from "fs/promises";
import path from "path";

/**
 * 解析 MDX 文件的前置信息 frontmatter
 * @param {string} fileContent - MDX 文件的原始内容
 * @returns {{metadata: Object, content: string}} 包含前置信息和正文内容的对象
 */
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const match = frontmatterRegex.exec(fileContent);
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
 * 获取指定目录下所有 .mdx 文件
 * @param {string} dir - 要扫描的目录路径
 * @returns {Promise<string[]>} 包含所有 .mdx 文件名的数组
 */
async function getMDXFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === ".mdx");
}

/**
 * 读取并解析 MDX 文件内容
 * @param {string} filePath - MDX 文件的完整路径
 * @returns {Promise<{metadata: Object, content: string}>} 包含解析后的前置信息和正文内容的对象
 */
async function readMDXFile(filePath) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * 获取指定目录下所有 MDX 文件的数据
 * @param {string} dir - 要扫描的目录路径
 * @returns {Promise<Array<{metadata: Object, slug: string, content: string}>>} 包含所有文章数据的数组
 */
async function getMDXData(dir) {
  const mdxFiles = await getMDXFiles(dir);

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata, content } = await readMDXFile(
        path.join(dir.toString(), file),
      );
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    }),
  );

  return posts;
}

/**
 * 获取所有博客文章
 * @returns {Promise<Array<{metadata: Object, content: string, slug: string}>>} 包含所有博客文章数据的数组
 */
export async function getPosts() {
  const posts = await getMDXData(
    path.join(process.cwd(), "src", "pages", "posts"),
  );
  return posts;
}
