import Image from "next/image";

import type { BlogArticleBlock, BlogRichArticle } from "@/types/blog";
import { bodyTextClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

function renderBlock(block: BlogArticleBlock, key: string) {
  if (block.type === "paragraph") {
    return (
      <p key={key} className={cn(bodyTextClass, "text-pretty")}>
        {block.text}
      </p>
    );
  }
  if (block.type === "list") {
    return (
      <ul key={key} className="ml-5 list-disc space-y-2 text-body-text">
        {block.items.map((item) => (
          <li key={item} className="text-[0.9375rem] leading-7 sm:text-base">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <figure key={key} className="overflow-hidden rounded-2xl border border-[#f2b3c7]/40">
      <div className="relative aspect-[16/10] w-full bg-primary-50">
        <Image
          src={block.src}
          alt={block.alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
      </div>
    </figure>
  );
}

type BlogRichArticleViewProps = {
  article: BlogRichArticle;
};

export function BlogRichArticleView({ article }: BlogRichArticleViewProps) {
  return (
    <div className="space-y-12">
      <div className="rounded-2xl border border-[#7a011f]/15 bg-[#fff9fb] px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a011f]">
          Quick answer
        </p>
        <p className={cn("mt-3", bodyTextClass)}>{article.quickAnswer}</p>
      </div>

      <div className="space-y-5">
        {article.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className={cn(bodyTextClass, "text-pretty")}>
            {paragraph}
          </p>
        ))}
      </div>

      {article.sections.map((section) => {
        const isFaqQuestion =
          section.id.startsWith("faq-") && section.id !== "frequently-asked-questions";

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 space-y-5 border-t border-[#f2b3c7]/40 pt-10"
          >
            {isFaqQuestion ? (
              <h3 className="text-lg font-semibold tracking-tight text-primary-950 sm:text-xl">
                {section.title}
              </h3>
            ) : (
              <h2 className="text-xl font-bold tracking-tight text-primary-950 sm:text-2xl">
                {section.title}
              </h2>
            )}
            <div className="space-y-5">
              {section.blocks.map((block, index) =>
                renderBlock(block, `${section.id}-${index}`),
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
