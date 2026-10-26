import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

import { BlogHeroShell } from "@/components/blog/BlogHeroShell";
import { formatBlogDate } from "@/data/blog";
import { siteMedia } from "@/lib/site-media";
import type { BlogPost } from "@/types/blog";
import { bodyTextSmClass, heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

type BlogArticleHeroProps = {
  post: BlogPost;
};

export function BlogArticleHero({ post }: BlogArticleHeroProps) {
  return (
    <BlogHeroShell
      imageSrc={post.heroImageSrc ?? post.imageSrc ?? siteMedia.home.blogHero}
      imageAlt={post.heroImageAlt ?? post.imageAlt}
    >
      {/* <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur-sm transition-colors hover:bg-white/15 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to blog
      </Link> */}

      {/* <div
        className={cn(
          "mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/90 sm:mt-8",
          bodyTextSmClass,
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4 shrink-0" aria-hidden />
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
        </span>
        <span className="text-white/50" aria-hidden>·</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div> */}

      <h1
        className={cn(
          heroTitleClass,
          "mx-auto mt-5 max-w-4xl text-balance sm:mt-6",
          "!text-[1.75rem] !leading-[1.15] min-[380px]:!text-[2rem]",
          "sm:!text-4xl md:!text-5xl lg:!text-[3.25rem] lg:!leading-[1.08]",
        )}
      >
        {post.title}
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
        {post.excerpt}
      </p>
    </BlogHeroShell>
  );
}
