import Link from "next/link";
import { getPosts } from "@/utils/mdx";
import Layout from "@/components/Layout";

/**
 * 获取所有博客文章的静态属性
 * @returns {Promise<{props: {posts: Array}}>} 包含所有博客文章数据的props对象
 */
export async function getStaticProps() {
  const posts = await getPosts();
  // 按发布日期降序排序
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.pubDate).getTime() -
      new Date(a.metadata.pubDate).getTime(),
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
}

/**
 * 文章列表 页面组件
 * @param {Object} props - 组件属性
 * @param {Array} props.posts - 博客文章列表数据
 * @returns {JSX.Element}
 */
export default function PostsList({ posts }) {
  return (
    <Layout title="文章 - 青衫 Neuro">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          文章列表
        </h1>

        {/* GitHub 链接 */}
        <div className="flex justify-end mb-4">
          <a
            href="https://github.com/ittuann/qingshanasd/blob/main/src/pages/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-600 hover:text-primary"
          >
            <i className="ri-github-fill mr-1"></i>在 GitHub 上查看
          </a>
        </div>

        {/* 文章列表容器 */}
        <div className="space-y-4">
          {/* 遍历文章数组，渲染每篇文章的预览卡片 */}
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              {/* 文章链接 */}
              <Link href={`/posts/${post.slug}`} className="block group">
                {/* 文章标题 */}
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-primary">
                  {post.metadata.title}
                </h2>

                {/* 文章描述 */}
                <p className="text-gray-600 mb-2">
                  {post.metadata.description}
                </p>

                {/* 文章日期 */}
                <p className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {post.metadata.pubDate}
                  </span>
                  {post.metadata.modDate && (
                    <span className="flex items-center gap-1">
                      <i className="ri-history-line"></i>
                      {post.metadata.modDate}
                    </span>
                  )}
                </p>

                {/* 链接 */}
                <span className="text-primary font-medium">阅读 →</span>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
