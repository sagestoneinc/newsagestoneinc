import { useParams, Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => String(p.id) === id);

  usePageMeta({
    title: post ? post.title : "Blog Post Not Found",
    description: post ? post.excerpt : "The blog post you are looking for could not be found.",
    keywords: post
      ? `${post.category}, SageStone blog, virtual assistant, ${post.title}`
      : "SageStone blog",
  });

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
      {/* Hero */}
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
          <div className="flex items-center gap-3 mb-4">
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
            {post.title}
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
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

      {/* Article Content */}
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
                    {block.text}
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
                        {item}
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

      {/* CTA */}
      <CTABanner
        title="Need Help Putting These Ideas Into Action?"
        subtitle="Our virtual assistants can help you implement the strategies discussed in this article. Book a free discovery call today."
        buttonText="Get Started"
        buttonLink="/contact"
        variant="sage"
      />
    </>
  );
}
