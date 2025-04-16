import Link from "next/link";
import { getPosts } from "@/utils/mdx";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function BlogHome({ posts }) {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by{" "}
        <code>next-mdx-remote</code>.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
