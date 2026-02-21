import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = ["All", "Operations", "Remote Work", "Real Estate", "Marketing", "Productivity", "Growth"];

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs a Virtual Assistant",
    excerpt: "If you're spending more time on admin than strategy, it might be time to delegate. Here are the top signals that you've outgrown the solo approach.",
    category: "Operations",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTYzMjA4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "How Remote Teams Are Redefining Productivity",
    excerpt: "Remote-first companies are outperforming traditional offices. Here's what the data says about distributed teams and why the trend is here to stay.",
    category: "Remote Work",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1766074903112-79661da9ab45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdmlkZW8lMjBjYWxsJTIwcmVtb3RlJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE2MzM2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 3,
    title: "The Real Estate VA Playbook: What to Delegate First",
    excerpt: "Agents who delegate listing coordination and CRM management close 40% more deals. Here's a step-by-step guide to getting started.",
    category: "Real Estate",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc3MTYzMjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Scheduling: Tools and Tactics That Work",
    excerpt: "Stop winging your social media strategy. These proven scheduling frameworks and tools will help you build a consistent online presence.",
    category: "Marketing",
    date: "Jan 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxNjMxOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 5,
    title: "The Hidden Cost of Doing Everything Yourself",
    excerpt: "Entrepreneurs often underestimate the true cost of wearing every hat. This analysis breaks down the numbers and shows the ROI of delegation.",
    category: "Productivity",
    date: "Jan 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1570649243616-238b814943e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTYyMjY4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 6,
    title: "Lead Generation Strategies That Scale with Your Business",
    excerpt: "From cold outreach to warm referrals, learn the lead generation strategies that work for businesses at every stage of growth.",
    category: "Growth",
    date: "Jan 6, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGFuYWx5dGljcyUyMGNoYXJ0fGVufDF8fHx8MTc3MTYzMjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 7,
    title: "Building a Workflow That Runs Without You",
    excerpt: "The best business systems are ones that don't depend on you. Here's how to create workflows and SOPs that empower your team to execute independently.",
    category: "Operations",
    date: "Dec 30, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MTYzMzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 8,
    title: "How to Set Up Your VA for Day-One Success",
    excerpt: "Onboarding a virtual assistant right can make or break the engagement. Follow this checklist to ensure a smooth, productive start from day one.",
    category: "Remote Work",
    date: "Dec 22, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1760278041778-40612e21b766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwcGxhbnRzJTIwb3JnYW5pemVkfGVufDF8fHx8MTc3MTYzMzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 9,
    title: "Email Marketing Automation: A Complete Guide for Small Businesses",
    excerpt: "Email automation isn't just for big companies. Learn how to set up effective email sequences that nurture leads and drive conversions on any budget.",
    category: "Marketing",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGF1dG9tYXRpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc3MTYzMzY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
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
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = blogPosts.filter((p) => p.featured);

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
              <article
                key={post.id}
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
