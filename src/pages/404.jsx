"use client";

import Layout from "@/components/Layout";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="PageNotFound - 青衫 Neuro">
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary-content mb-6">
            哎呀！页面不见了
          </h2>
          <p className="text-primary-content/70 mb-8">
            别担心，这只是一个小小的迷路。
          </p>
          <p className="text-sm text-primary-content/60 mb-6">
            3 秒后自动返回首页...
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="px-6 py-2 bg-primary text-primary-content rounded-full hover:bg-primary/80 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
