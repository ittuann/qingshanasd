import React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export function Greet({ name = "world" }) {
  return <div className="p-4 bg-gray-100 rounded">Hello, {name}!</div>;
}

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
      <a href={href} className={linkStyle} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkStyle}
      {...props}
    >
      {children}
    </a>
  );
}

const components = {
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
  h3: (props) => <h3 {...props} className="text-xl font-bold mt-4 mb-2" />,
  p: (props) => <p {...props} className="mb-4 leading-relaxed" />,
  ul: (props) => <ul {...props} className="list-disc pl-6 mb-4" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6 mb-4" />,
  li: (props) => <li {...props} className="mb-2" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-gray-300 pl-4 italic my-4"
    />
  ),
  code: (props) => (
    <code {...props} className="bg-gray-100 rounded px-1 py-1 mb-4 font-mono" />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 font-mono"
    />
  ),
  a: CustomLink,
  Greet: Greet,
};

export function CustomMDX(props) {
  return (
    <article className="prose prose-lg max-w-none">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </article>
  );
}
