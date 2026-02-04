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
  const postsPerPage = 30;
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-3 text-center text-gray-900">
          <FormattedMessage id="Posts.pageTitle" />
        </h1>

        {/* GitHub 链接 */}
        <div className="flex justify-end mb-8">
          <Link
            href="https://github.com/ittuann/qingshanasd/blob/main/src/pages/posts/"
            target="_blank"
            className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <i className="ri-github-fill mr-1"></i>View on GitHub
          </Link>
          <Link
            href="https://github.com/search?q=repo%3Aittuann%2Fqingshanasd+path%3A%2F%5Esrc%5C%2Fpages%5C%2Fposts%5C%2F%2F+&type=code"
            target="_blank"
            className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors mr-4"
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
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1"
            >
              {/* 文章链接 */}
              <Link href={`/posts/${post.slug}`} className="block group">
                {/* 文章标题 */}
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {post.metadata.title}
                  {post.metadata.pin !== undefined && (
                    <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary">
                      <i className="ri-pushpin-fill mr-1"></i>
                    </span>
                  )}
                </h2>

                {/* 文章描述 */}
                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
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
                  <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300 hidden group-hover:inline-flex items-center">
                    阅读全文 <i className="ri-arrow-right-line ml-1"></i>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 分页导航 */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 mb-8">
            <nav className="flex items-center">
              {/* 上一页按钮 */}
              <button
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`px-3 py-2 mx-1 rounded-md ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
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
                    className={`w-10 h-10 mx-1 rounded-full ${
                      currentPage === i + 1
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
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
                className={`px-3 py-2 mx-1 rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                } transition-colors duration-300`}
              >
                下一页
                <i className="ri-arrow-right-s-line ml-1"></i>
              </button>
            </nav>
          </div>
        )}

        <div className="flex justify-end mt-8">
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
