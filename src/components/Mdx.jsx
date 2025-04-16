import React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export function Greet({ name = "world" }) {
  return <div className={""}>Hello, {name}!</div>;
}

function CustomLink({ href, children, ...props }) {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={""} {...props}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a href={href} className={""} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={""}
      {...props}
    >
      {children}
    </a>
  );
}

export function CustomMDX(props) {
  const components = {
    a: CustomLink,
    Greet: Greet,
  };

  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
