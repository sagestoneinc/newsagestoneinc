import { CheckCircle2, Award, BookOpen, BarChart3, Shield } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { usePageMeta } from "../hooks/usePageMeta";

const teamMembers = [
  {
    name: "Olivia Martinez",
    role: "Founder & CEO",
    bio: "10+ years in business operations and team management. Passionate about making quality VA support accessible.",
    image: "https://images.unsplash.com/photo-1770364019841-b704d8630e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcxNjMyNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Daniel Kim",
    role: "Head of Operations",
    bio: "Former project manager at a Fortune 500. Oversees VA matching, onboarding, and quality assurance.",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNTY5Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Priya Sharma",
    role: "Client Success Manager",
    bio: "Ensures every client gets maximum value from their VA engagement. Expert in workflow optimization.",
    image: "https://images.unsplash.com/photo-1762341117363-824bb37ad300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTU2NjA4OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Marcus Williams",
    role: "Marketing Lead",
    bio: "Digital marketing strategist with 8 years of agency experience. Leads our marketing VA training programs.",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTYxMTg3OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sarah Chen",
    role: "Real Estate VA Specialist",
    bio: "Licensed real estate background. Trains and manages our real estate virtual assistant team.",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjI5ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Alex Thompson",
    role: "Finance & Bookkeeping Lead",
    bio: "CPA with deep expertise in small business accounting. Manages bookkeeping VA quality standards.",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNTY5Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const qualityPoints = [
  {
    icon: Award,
    title: "Rigorous Vetting Process",
    desc: "Every VA goes through skills testing, background checks, and multiple interviews before joining SageStone.",
  },
  {
    icon: BookOpen,
    title: "Continuous Training",
    desc: "Monthly training sessions on tools, industry best practices, and communication skills keep our team sharp.",
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    desc: "Regular KPI tracking, client feedback loops, and quality audits ensure consistent service delivery.",
  },
  {
    icon: Shield,
    title: "Dedicated Management",
    desc: "Every VA has a U.S.-based manager who provides oversight, support, and serves as your escalation point.",
  },
];

export default function Team() {
  usePageMeta({
    title: "Meet Our Team",
    description: "Meet the SageStone Inc. leadership and vetted virtual assistant specialists behind calm, reliable remote support for growing businesses.",
    keywords: "SageStone team, virtual assistant experts, VA management, leadership team, quality assurance",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            Our Team
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
            Meet the People Behind <span className="text-sage-500">SageStone</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            Our leadership team brings together decades of experience in operations, marketing, finance, and technology to ensure every client gets world-class support.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-sage-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-stone-900" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>{member.name}</h3>
                  <p className="text-sage-600 text-[0.8125rem] mb-3" style={{ fontWeight: 500 }}>{member.role}</p>
                  <p className="text-stone-500 text-[0.875rem] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Maintain Quality */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Quality Assurance"
            title="How We Maintain Excellence"
            subtitle="Quality isn't an afterthought. It's embedded in every step of our process."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {qualityPoints.map((qp) => (
              <div key={qp.title} className="flex gap-5 p-7 rounded-2xl bg-white border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center shrink-0">
                  <qp.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-stone-900 mb-1.5" style={{ fontSize: '1rem', fontWeight: 600 }}>{qp.title}</h4>
                  <p className="text-stone-500 text-[0.875rem] leading-relaxed">{qp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Join Our Team?"
        subtitle="We're always looking for talented virtual assistants. Reach out to learn about opportunities."
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="dark"
      />
    </>
  );
}
