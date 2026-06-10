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
          <div className="mx-auto max-w-4xl px-4 py-8">
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
          </div>
        </Layout>
      );
    },
    h1: (props) => (
      <h1
        {...props}
        className="mt-8 mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className="mt-6 mb-3 scroll-m-20 text-3xl font-bold tracking-tight text-balance first:mt-0"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className="mt-4 mb-2 scroll-m-20 text-2xl font-semibold tracking-tight"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className="mt-2 mb-1 scroll-m-20 text-xl font-semibold tracking-tight"
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        className="mt-1 mb-1 scroll-m-20 text-lg font-semibold tracking-tight"
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        className="mt-1 mb-1 scroll-m-20 text-base font-semibold tracking-tight"
      />
    ),
    p: (props) => <p {...props} className="mb-4 leading-relaxed" />,
    li: (props) => <li {...props} className="mb-2" />,
    ul: (props) => <ul {...props} className="mt-2 ml-6 list-disc" />,
    ol: (props) => <ol {...props} className="mt-2 ml-6 list-decimal" />,
    blockquote: (props) => (
      <blockquote
        {...props}
        className="mt-6 border-l-4 border-gray-300 pl-6 italic"
      />
    ),
    code: (props) => (
      <code
        {...props}
        className="rounded bg-gray-100 px-1 py-1 font-mono text-sm font-semibold"
      />
    ),
    pre: (props) => (
      <pre
        {...props}
        className="mb-4 overflow-x-auto rounded bg-gray-100 p-4 font-mono"
      />
    ),
    br: () => <Separator />,
    a: CustomLink,
    del: (props) => <del {...props} className="text-gray-500" />,
    sup: (props) => <sup {...props} className="text-xs text-gray-600" />,
    table: (props) => (
      <div className="my-6 overflow-x-auto overflow-y-auto">
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
        className="even:bg-muted transition-colors hover:bg-gray-300"
      />
    ),
    th: (props) => (
      <th
        {...props}
        className="border-b border-gray-200 px-4 py-3 text-left font-medium text-gray-700"
      />
    ),
    td: (props) => (
      <td {...props} className="border-b border-gray-100 px-4 py-3" />
    ),
    CardCustom: CardCustom,
    ...components,
  };
}
