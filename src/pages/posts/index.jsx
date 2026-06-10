import Link from "next/link";
import { useState } from "react";
import { getPosts } from "@/utils/mdx";
import Layout from "@/components/Layout";
import { FormattedMessage } from "react-intl";
import "remixicon/fonts/remixicon.css";

/**
 * 获取所有博客文章的静态属性
 * 使用 next.js 的 getStaticProps 函数
 * @returns {Promise<{props: {posts: Array}}>} 包含所有博客文章数据的props对象
 */
export async function getStaticProps() {
  const posts = await getPosts();

  // 分离置顶文章和普通文章
  const pinnedPosts = posts.filter((post) => post.metadata.pin !== undefined);
  const normalPosts = posts.filter((post) => post.metadata.pin === undefined);

  // 对普通文章按发布日期降序排序
  const sortedNormalPosts = normalPosts.sort(
    (a, b) =>
      new Date(b.metadata.pubDate).getTime() -
      new Date(a.metadata.pubDate).getTime(),
  );

  // 对置顶文章按pin值升序排序
  const sortedPinnedPosts = pinnedPosts.sort(
    (a, b) => parseInt(a.metadata.pin) - parseInt(b.metadata.pin),
  );

  // 合并置顶文章和普通文章
  const sortedPosts = [...sortedPinnedPosts, ...sortedNormalPosts];

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
  // 分页相关状态
  const postsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // 计算总页数
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 获取当前页的文章
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 处理页面变化
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 页面切换后滚动到顶部
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout
      title="文章列表 | 青衫 Neuro"
      description="青衫 Neuro 所发布的文章列表"
    >
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* 标题 */}
        <h1 className="mb-3 text-center text-4xl font-bold text-gray-900">
          <FormattedMessage id="Posts.pageTitle" />
        </h1>

        {/* GitHub 链接 */}
        <div className="mb-8 flex justify-end">
          <Link
            href="https://github.com/ittuann/qingshanasd/blob/main/src/pages/posts/"
            target="_blank"
            className="hover:text-primary mr-4 flex items-center text-sm text-gray-600 transition-colors"
          >
            <i className="ri-github-fill mr-1"></i>View on GitHub
          </Link>
          <Link
            href="https://github.com/search?q=repo%3Aittuann%2Fqingshanasd+path%3A%2F%5Esrc%5C%2Fpages%5C%2Fposts%5C%2F%2F+&type=code"
            target="_blank"
            className="hover:text-primary mr-4 flex items-center text-sm text-gray-600 transition-colors"
          >
            <i className="ri-menu-search-line mr-1"></i>Search on GitHub
          </Link>
        </div>

        {/* 文章列表容器 */}
        <div className="space-y-8">
          {/* 遍历当前页的文章数组，渲染每篇文章的预览卡片 */}
          {currentPosts.map((post) => (
            <article
              key={post.slug}
              className="hover:border-primary/20 transform rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* 文章链接 */}
              <Link href={`/posts/${post.slug}`} className="group block">
                {/* 文章标题 */}
                <h2 className="group-hover:text-primary mb-3 text-2xl font-semibold text-gray-900 transition-colors duration-300">
                  {post.metadata.title}
                  {post.metadata.pin !== undefined && (
                    <span className="bg-primary/10 text-primary ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs">
                      <i className="ri-pushpin-fill mr-1"></i>
                    </span>
                  )}
                </h2>

                {/* 文章描述 */}
                <p className="mb-4 line-clamp-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {post.metadata.description}
                </p>

                {/* 文章日期 */}
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-4 text-sm text-gray-500">
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
                  <span className="text-primary hidden items-center text-sm transition-transform duration-300 group-hover:inline-flex group-hover:translate-x-1">
                    阅读全文 <i className="ri-arrow-right-line ml-1"></i>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 分页导航 */}
        {totalPages > 1 && (
          <div className="mt-12 mb-8 flex justify-center">
            <nav className="flex items-center">
              {/* 上一页按钮 */}
              <button
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`mx-1 rounded-md px-3 py-2 ${
                  currentPage === 1
                    ? "cursor-not-allowed text-gray-400"
                    : "hover:bg-primary/10 hover:text-primary text-gray-700"
                } transition-colors duration-300`}
              >
                <i className="ri-arrow-left-s-line"></i>
                上一页
              </button>

              {/* 页码按钮 */}
              <div className="flex items-center">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`mx-1 h-10 w-10 rounded-full ${
                      currentPage === i + 1
                        ? "bg-primary text-white"
                        : "hover:bg-primary/10 hover:text-primary bg-gray-100 text-gray-700"
                    } transition-colors duration-300`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* 下一页按钮 */}
              <button
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`mx-1 rounded-md px-3 py-2 ${
                  currentPage === totalPages
                    ? "cursor-not-allowed text-gray-400"
                    : "hover:bg-primary/10 hover:text-primary text-gray-700"
                } transition-colors duration-300`}
              >
                下一页
                <i className="ri-arrow-right-s-line ml-1"></i>
              </button>
            </nav>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <Link href="/rss.xml" target="_blank" className="mr-4">
            <i className="ri-rss-fill mr-1"></i>RSS
          </Link>
          <Link href="/sitemap.xml" target="_blank" className="mr-4">
            <i className="ri-gps-line mr-1"></i>Sitemap
          </Link>
          <Link href="/atom.xml" target="_blank" className="mr-4">
            <i className="ri-reactjs-line mr-1"></i>Atom
          </Link>
        </div>
      </div>
    </Layout>
  );
}
