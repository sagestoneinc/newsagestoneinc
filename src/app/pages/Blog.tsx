import { useState, useEffect } from "react";
import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";

const categories = ["All", "Virtual Assistant", "Customer Support", "E-Commerce Support", "Operations", "Remote Work", "Real Estate", "Marketing", "Productivity", "Growth"];

function getPostPath(post: (typeof blogPosts)[0]) {
  return `/blog/${post.slug ?? post.id}`;
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link to={getPostPath(post)} className="block" aria-label={`Read ${post.title}`}>
      <article className="group rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg hover:border-sage-200 transition-all duration-300 bg-white">
        <div className="aspect-[16/9] overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-sage-50 text-sage-600 rounded-full text-[0.75rem]" style={{ fontWeight: 500 }}>
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-stone-400 text-[0.75rem]">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3
            className="text-stone-900 mb-2 group-hover:text-sage-600 transition-colors"
            style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}
          >
            {post.title}
          </h3>
          <p className="text-stone-500 text-[0.8125rem] leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-stone-400 text-[0.75rem]">{post.date}</span>
            <span className="flex items-center gap-1 text-sage-600 text-[0.8125rem] group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  usePageMeta({
    title: "Virtual Assistant Blog",
    description: "Read SageStone insights on virtual assistant services, remote operations, delegation, real estate VA support, marketing workflows, and business productivity.",
    keywords: "virtual assistant blog, remote operations tips, business productivity, delegation strategy, real estate VA, marketing workflows, SageStone blog",
  });

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = blogPosts.filter((p) => p.featured);

  useEffect(() => {
    const blogJsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SageStone Inc Blog",
      "description": "Insights and resources on virtual assistance, remote work, and business productivity.",
      "url": "https://www.sagestoneinc.com/blog/",
      "publisher": {
        "@type": "Organization",
        "name": "SageStone Inc",
        "url": "https://www.sagestoneinc.com",
      },
      "blogPost": blogPosts.map((post) => {
        const parsedDate = new Date(post.date);
        const isoDate =
          isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString().split("T")[0];

        return {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          // Use ISO 8601 date for structured data; keep human-readable date for UI.
          ...(isoDate ? { "datePublished": isoDate } : {}),
          "image": post.image,
          "url": `https://www.sagestoneinc.com${getPostPath(post)}/`,
          "author": {
            "@type": "Organization",
            "name": "SageStone Inc",
          },
        };
      }),
    };
    const existing = document.getElementById("blog-jsonld");
    if (existing && existing.tagName === "SCRIPT") {
      const script = existing as HTMLScriptElement;
      script.type = "application/ld+json";
      script.text = JSON.stringify(blogJsonLd);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(blogJsonLd);
      script.id = "blog-jsonld";
      document.head.appendChild(script);
    }
    return () => {
      const el = document.getElementById("blog-jsonld");
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6"
            style={{ fontWeight: 500 }}
          >
            Blog & Resources
          </span>
          <h1
            className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            Insights to Help Your Business{" "}
            <span className="text-sage-500">Thrive</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            Tips, strategies, and stories about virtual support, remote work,
            productivity, and growing your business.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-stone-900 mb-8" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={getPostPath(post)} className="block">
                <article
                  className="group relative rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 bg-sage-500/90 text-white rounded-full text-[0.75rem] mb-3" style={{ fontWeight: 500 }}>
                      {post.category}
                    </span>
                    <h3
                      className="text-white mb-2"
                      style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-stone-300 text-[0.875rem] leading-relaxed mb-3 max-w-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-stone-400 text-[0.75rem]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[0.8125rem] whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-sage-500 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-sage-300"
                }`}
                style={{ fontWeight: activeCategory === cat ? 500 : 400 }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-400 text-[0.9375rem]">
                No articles in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTABanner
        title="Get Insights Delivered to Your Inbox"
        subtitle="Subscribe to our newsletter for the latest tips on virtual support, remote work, and business growth."
        buttonText="Contact Us to Subscribe"
        buttonLink="/contact"
        variant="dark"
      />
    </>
  );
}
