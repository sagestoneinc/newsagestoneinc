import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";

const SITE_URL = "https://www.sagestoneinc.com";

function getPostPath(post: (typeof blogPosts)[0]) {
  return `/blog/${post.slug ?? post.id}`;
}

function renderLinkedText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    return (
      <Link key={`${match[2]}-${index}`} to={match[2]} className="text-sage-600 underline underline-offset-4 hover:text-sage-700">
        {match[1]}
      </Link>
    );
  });
}

function toIsoDate(date: string) {
  const parsedDate = new Date(date);
  return isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString().split("T")[0];
}

function setJsonLd(id: string, data: unknown) {
  const existing = document.getElementById(id);
  if (existing && existing.tagName === "SCRIPT") {
    existing.textContent = JSON.stringify(data);
    return;
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => String(p.id) === id || p.slug === id);
  const canonicalPath = post ? getPostPath(post) : "/blog";
  const canonicalUrl = `${SITE_URL}${canonicalPath}/`;
  const pageTitle = post?.metaTitle ?? post?.title ?? "Blog Post Not Found";
  const description = post?.metaDescription ?? post?.excerpt ?? "The blog post you are looking for could not be found.";

  usePageMeta({
    title: pageTitle,
    description,
    keywords: post
      ? `${post.category}, SageStone blog, virtual assistant, managed remote support, ${post.title}`
      : "SageStone blog",
    image: post?.image,
    imageAlt: post?.title,
    type: post ? "article" : "website",
    noindex: !post,
  });

  useEffect(() => {
    if (!post) return;

    const isoDate = toIsoDate(post.date);
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.h1 ?? post.title,
      "description": description,
      "image": post.image,
      "url": canonicalUrl,
      ...(isoDate ? { "datePublished": isoDate, "dateModified": isoDate } : {}),
      "author": { "@type": "Organization", "name": "SageStone Inc", "url": SITE_URL },
      "publisher": { "@type": "Organization", "name": "SageStone Inc", "url": SITE_URL },
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    };

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog/` },
        { "@type": "ListItem", "position": 3, "name": post.h1 ?? post.title, "item": canonicalUrl },
      ],
    };

    setJsonLd("blog-post-jsonld", articleJsonLd);
    setJsonLd("blog-post-breadcrumb-jsonld", breadcrumbJsonLd);

    return () => {
      document.getElementById("blog-post-jsonld")?.remove();
      document.getElementById("blog-post-breadcrumb-jsonld")?.remove();
    };
  }, [canonicalUrl, description, post]);

  if (!post) {
    return (
      <section className="py-32 lg:py-40 bg-gradient-to-br from-sage-50 via-white to-stone-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1
            className="text-stone-900 tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Post Not Found
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.9375rem]"
            style={{ fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sage-600 text-[0.875rem] mb-6 hover:text-sage-700 transition-colors"
            style={{ fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-sage-50 text-sage-600 rounded-full text-[0.75rem]" style={{ fontWeight: 500 }}>
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-stone-400 text-[0.75rem]">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-stone-400 text-[0.75rem]">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>
          <h1
            className="text-stone-900 tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            {post.h1 ?? post.title}
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-stone-200 -mt-4">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-stone-900 mt-10 mb-4"
                    style={{ fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-stone-600 text-[1rem] leading-relaxed mb-5"
                  >
                    {renderLinkedText(block.text ?? "")}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-2 mb-5 ml-4">
                    {(block.items ?? []).map((item, i) => (
                      <li
                        key={i}
                        className="text-stone-600 text-[1rem] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-sage-500 mt-1.5 shrink-0">•</span>
                        <span>{renderLinkedText(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Turn Insight Into Support?"
        subtitle="Tell SageStone Inc where your team needs more capacity, and we will help you shape a practical next step."
        buttonText="Discuss Your Support Needs"
        buttonLink="/contact"
        variant="sage"
      />
    </>
  );
}
