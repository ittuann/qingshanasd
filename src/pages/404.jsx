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
  }, [router]);

  return (
    <Layout title="PageNotFound | 青衫 Neuro" description="页面未找到">
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-primary mb-4 text-9xl font-bold">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-600">
            哎呀！页面不见了
          </h2>
          <p className="mb-8 text-zinc-600/70">
            别担心，这只是一个小小的迷路。
          </p>
          <p className="mb-6 text-sm text-zinc-600/60">3 秒后自动返回首页...</p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-primary/80 rounded-full px-6 py-2 text-zinc-600 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
