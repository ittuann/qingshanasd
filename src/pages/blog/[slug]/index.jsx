import { getPosts } from "@/utils/mdx";
import { CustomMDX } from "@/components/Mdx";
import Layout from "@/components/Layout";
import Link from "next/link";

/**
 * 获取所有博客文章的路径参数
 * @returns {Promise<{ paths: { params: { slug: string } }[], fallback: boolean }>}
 */
export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

/**
 * 获取指定 slug 的博客文章数据
 * @param {Object} context - Next.js 静态生成上下文
 * @param {Object} context.params - URL 参数
 * @param {string} context.params.slug - 文章的 slug
 * @returns {Promise<{ props: { post: Object } }>}
 */
export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

/**
 * 博客文章详情页面组件
 * @param {Object} props - 组件属性
 * @param {Object} props.post - 博客文章数据
 * @returns {JSX.Element}
 */
export default function Blog({ post }) {
  return (
    <Layout title={post.metadata.title + " - 青衫 Neuro"}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.metadata.title}
        </h1>
        {post.metadata.description && (
          <p className="text-lg text-gray-600 mb-8">
            {post.metadata.description}
          </p>
        )}
        <article className="prose prose-lg max-w-none">
          <CustomMDX source={post.content} />
        </article>
      </main>
    </Layout>
  );
}
