import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import CardCustom from "@/components/CardCustom";

function CustomLink({ href, children, ...props }) {
  const linkStyle = "text-blue-600 hover:text-blue-800 underline";

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={linkStyle} {...props}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <Link href={href} className={linkStyle} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkStyle}
      {...props}
    >
      {children}
    </Link>
  );
}

export function useMDXComponents(components) {
  return {
    wrapper: ({ children }) => {
      return (
        <Layout title={"青衫 Neuro 文章"}>
          <main className="max-w-4xl mx-auto px-4 py-8">
            {/* Title */}
            {/* <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {post?.metadata?.title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {post?.metadata.description}
            </p> */}

            {/* Icons */}
            {/* <p className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-1">
                <i className="ri-time-line"></i>
                {post?.metadata.pubDate}
              </span>
              {post?.metadata?.modDate && (
                <span className="flex items-center gap-1">
                  <i className="ri-history-line"></i>
                  {post.metadata.modDate}
                </span>
              )}
              <span className="flex items-center gap-1">
                <i className="ri-github-fill"></i>
                <Link
                  href={"https://github.com/ittuann/qingshanasd/blob/main/src/pages/posts/"}
                  target="_blank"
                  className="hover:text-blue-600 transition-colors"
                >
                  GitHub
                </Link>
              </span>
            </p> */}

            <article className="prose prose-lg max-w-none">{children}</article>
          </main>
        </Layout>
      );
    },
    h1: (props) => (
      <h1
        {...props}
        className="text-4xl font-extrabold tracking-tight text-balance scroll-m-20 mt-8 mb-4"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className="text-3xl font-bold tracking-tight text-balance scroll-m-20 first:mt-0 mt-6 mb-3"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className="text-2xl font-semibold tracking-tight scroll-m-20 mt-4 mb-2"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className="text-xl font-semibold tracking-tight scroll-m-20 mt-2 mb-1"
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        className="text-lg font-semibold tracking-tight scroll-m-20 mt-1 mb-1"
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        className="text-base font-semibold tracking-tight scroll-m-20 mt-1 mb-1"
      />
    ),
    p: (props) => <p {...props} className="leading-relaxed mb-4" />,
    li: (props) => <li {...props} className="mb-2" />,
    ul: (props) => <ul {...props} className="list-disc ml-6 mt-2" />,
    ol: (props) => <ol {...props} className="list-decimal ml-6 mt-2" />,
    blockquote: (props) => (
      <blockquote
        {...props}
        className="border-l-4 border-gray-300 pl-6 italic mt-6"
      />
    ),
    code: (props) => (
      <code
        {...props}
        className="bg-gray-100 rounded px-1 py-1 font-mono font-semibold text-sm"
      />
    ),
    pre: (props) => (
      <pre
        {...props}
        className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 font-mono"
      />
    ),
    br: () => <Separator />,
    a: CustomLink,
    del: (props) => <del {...props} className="text-gray-500" />,
    sup: (props) => <sup {...props} className="text-xs text-gray-600" />,
    table: (props) => (
      <div className="overflow-x-auto overflow-y-auto my-6">
        <table
          {...props}
          className="table-auto border-collapse rounded text-sm"
        />
      </div>
    ),
    thead: (props) => <thead {...props} className="bg-gray-200" />,
    tbody: (props) => <tbody {...props} className="divide-y divide-gray-200" />,
    tr: (props) => (
      <tr
        {...props}
        className="even:bg-muted hover:bg-gray-300 transition-colors"
      />
    ),
    th: (props) => (
      <th
        {...props}
        className="px-4 py-3 font-medium text-left text-gray-700 border-b border-gray-200"
      />
    ),
    td: (props) => (
      <td {...props} className="px-4 py-3 border-b border-gray-100" />
    ),
    Card: CardCustom,
    ...components,
  };
}
