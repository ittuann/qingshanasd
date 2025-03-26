"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Term() {
  const router = useRouter();

  useEffect(() => {
    router.push("/term");
  }, []);

  return null;
}
