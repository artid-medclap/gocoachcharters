import {
  blogArticleFaqSections,
  blogArticleWhyChooseSection,
  buildBlogArticleToc,
} from "@/data/blog/shared-article-sections";
import type { BlogArticleSection, BlogPost, BlogRichArticle } from "@/types/blog";

const DEFAULT_SECTION_META = [
  { id: "key-highlights", title: "Highlights for your trip" },
  { id: "itinerary-tips", title: "Itinerary & local tips" },
  { id: "group-transportation", title: "Group transportation" },
] as const;

/** Builds the same rich layout as the flagship article when a post has no custom `richArticle`. */
export function createRichArticleFromPost(post: BlogPost): BlogRichArticle {
  const [introParagraph, ...bodyParagraphs] = post.body;

  const contentSections: BlogArticleSection[] = bodyParagraphs.map((text, index) => {
    const meta = DEFAULT_SECTION_META[index] ?? {
      id: `section-${index + 1}`,
      title: "More to know",
    };

    const blocks: BlogArticleSection["blocks"] = [
      ...(index === 0
        ? [{ type: "image" as const, src: post.imageSrc, alt: post.imageAlt }]
        : []),
      { type: "paragraph" as const, text },
    ];

    return {
      id: meta.id,
      title: meta.title,
      blocks,
    };
  });

  const sections: BlogArticleSection[] = [
    ...contentSections,
    blogArticleWhyChooseSection,
    ...blogArticleFaqSections,
  ];

  return {
    quickAnswer: post.excerpt,
    intro: introParagraph ? [introParagraph] : [],
    toc: buildBlogArticleToc(sections),
    sections,
  };
}

export function resolveBlogRichArticle(post: BlogPost): BlogRichArticle {
  return post.richArticle ?? createRichArticleFromPost(post);
}
