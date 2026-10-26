import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticleCta } from "@/components/blog/BlogArticleCta";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogRichArticleLayout } from "@/components/blog/BlogRichArticleLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { resolveBlogRichArticle } from "@/lib/blog/create-rich-article";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const heroImage = post.heroImageSrc ?? post.imageSrc;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: heroImage, alt: post.heroImageAlt ?? post.imageAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const article = resolveBlogRichArticle(post);
  const heroImage = post.heroImageSrc ?? post.imageSrc;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: heroImage,
    author: {
      "@type": "Organization",
      name: "Go Coach Charters",
    },
    publisher: {
      "@type": "Organization",
      name: "Go Coach Charters",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-surface-blush pb-20">
      <JsonLd data={jsonLd} />

      <article>
        <BlogArticleHero post={post} />

        <div className="relative w-full">
          <BlogRichArticleLayout article={article}>
            <BlogArticleCta />
          </BlogRichArticleLayout>
        </div>
      </article>
    </main>
  );
}
