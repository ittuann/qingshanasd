import { getPosts } from "@/utils/mdx";
import { CustomMDX } from "@/components/Mdx";
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
    <>
      <header>
        <nav>
          <Link href="/">👈 Go back home</Link>
        </nav>
      </header>
      <main>
        <h1 className={""}>{post.metadata.title}</h1>
        {post.metadata.description && (
          <p className={""}>{post.metadata.description}</p>
        )}
        <article>
          <CustomMDX source={post.content} />
        </article>
      </main>
    </>
  );
}
