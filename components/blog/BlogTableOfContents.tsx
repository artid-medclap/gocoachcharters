import type { BlogTocItem } from "@/types/blog";
import { cn } from "@/lib/utils";

type BlogTableOfContentsProps = {
  items: BlogTocItem[];
  className?: string;
};

export function BlogTableOfContents({ items, className }: BlogTableOfContentsProps) {
  return (
    <nav aria-label="Table of contents" className={cn("bg-transparent", className)}>
      <p className="border-b border-[#f2b3c7]/40 px-3 py-3.5 text-[0.8125rem] font-bold uppercase tracking-[0.12em] sm:text-xs">
        <span className="text-[#7a011f]">Table</span>
        <span className="text-primary-950/75"> of Contents</span>
      </p>

      <ol className="space-y-0.5 px-1.5 py-2 pb-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block border-l-2 border-transparent py-2 pr-2 pl-2 text-[0.8125rem] leading-snug text-primary-950/80 transition-colors hover:border-[#7a011f] hover:bg-white/70 hover:text-[#7a011f]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
