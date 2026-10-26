import type { ReactNode } from "react";

import { BlogFaqSection } from "@/components/blog/BlogFaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BlogFaqSection />
      <FinalCtaSection />
    </>
  );
}
