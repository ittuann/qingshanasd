import { getPosts } from "@/utils/mdx";
import { CustomMDX } from "@/components/Mdx";
import Layout from "@/components/Layout";
import Link from "next/link";

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

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

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
