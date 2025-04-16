import Link from "next/link";
import { getPosts } from "@/utils/mdx";
import Layout from "@/components/Layout";

/**
 * 获取所有博客文章的静态属性
 * @returns {Promise<{props: {posts: Array}}>} 包含所有博客文章数据的props对象
 */
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

/**
 * 博客文章列表页面组件
 * @param {Object} props - 组件属性
 * @param {Array} props.posts - 博客文章列表数据
 * @returns {JSX.Element}
 */
export default function BlogList({ posts }) {
  return (
    <Layout title="文章 - 青衫 Neuro">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          文章列表
        </h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-primary">
                  {post.metadata.title}
                </h2>
                {post.metadata.description && (
                  <p className="text-gray-600 mb-4">
                    {post.metadata.description}
                  </p>
                )}
                <span className="text-primary font-medium">阅读更多 →</span>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
