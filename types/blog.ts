export type BlogCategory = "Blog" | "Events" | "Travel" | "Guides";

export interface BlogTocItem {
  id: string;
  label: string;
}

export type BlogArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export interface BlogArticleSection {
  id: string;
  title: string;
  blocks: BlogArticleBlock[];
}

export interface BlogRichArticle {
  quickAnswer: string;
  intro: string[];
  toc: BlogTocItem[];
  sections: BlogArticleSection[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: BlogCategory;
  imageSrc: string;
  imageAlt: string;
  /** Optional full-bleed hero on the article page (defaults to site blog hero) */
  heroImageSrc?: string;
  heroImageAlt?: string;
  /** Short paragraphs for simple article pages */
  body: string[];
  richArticle?: BlogRichArticle;
}
