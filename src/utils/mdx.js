import fs from "fs/promises";
import path from "path";

// 解析前置信息（frontmatter）的函数
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

  // 返回提取出的前置信息和正文内容
  return { metadata, content };
}

// 获取指定目录下所有 .mdx 文件的函数
async function getMDXFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === ".mdx");
}

// 读取 .mdx 文件内容并解析的函数
async function readMDXFile(filePath) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// 获取指定目录下所有 .mdx 文件的元数据和内容
async function getMDXData(dir) {
  // 获取目录下所有 .mdx 文件
  const mdxFiles = await getMDXFiles(dir);

  // 遍历每个文件，读取并解析其内容
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

// 获取博客文章的函数
export async function getPosts() {
  const posts = await getMDXData(
    path.join(process.cwd(), "src", "pages", "blog", "_posts"),
  );
  console.log("获取的博客文章数据:", posts);
  return posts;
}
