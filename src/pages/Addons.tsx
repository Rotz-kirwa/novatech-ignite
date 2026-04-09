import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Bot, Users, Mail, Palette, Image, Search, ArrowRight, CheckCircle } from "lucide-react";

const addons = [
  {
    icon: Bot,
    title: "AI Automation Bots",
    desc: "Smart chatbots for WhatsApp, websites, and social media that handle customer queries 24/7.",
    features: ["WhatsApp bot integration", "Website live chat", "Auto-response workflows", "Lead qualification"],
    price: "From KSH 10,000",
  },
  {
    icon: Users,
    title: "CRM Systems",
    desc: "Customer relationship management tools to track leads, manage contacts, and close more deals.",
    features: ["Contact management", "Pipeline tracking", "Task automation", "Reporting dashboards"],
    price: "From KSH 15,000",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Professional email campaigns that engage your audience and drive conversions.",
    features: ["Campaign design", "Subscriber management", "A/B testing", "Analytics & reporting"],
    price: "From KSH 8,000/mo",
  },
  {
    icon: Palette,
    title: "Branding Packages",
    desc: "Complete brand identity design including logos, colors, typography, and brand guidelines.",
    features: ["Logo design (3 concepts)", "Brand guidelines", "Business card design", "Social media kit"],
    price: "From KSH 20,000",
  },
  {
    icon: Image,
    title: "Graphic Design",
    desc: "Eye-catching visuals for social media, marketing materials, and digital advertising.",
    features: ["Social media posts", "Banner ads", "Flyer & poster design", "Presentation design"],
    price: "From KSH 5,000",
  },
  {
    icon: Search,
    title: "SEO Monthly Plans",
    desc: "Ongoing search engine optimization to boost your visibility and drive organic traffic.",
    features: ["Keyword research", "On-page optimization", "Content strategy", "Monthly reports"],
    price: "From KSH 12,000/mo",
  },
];

const Addons = () => (
  <div>
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-glow-purple/15 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="Add-Ons" title="Boost Your Business with" highlight="Premium Add-Ons" description="Enhance your digital presence with these powerful tools and services." light />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border/50 hover-lift flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <addon.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{addon.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{addon.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {addon.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="font-display font-bold text-primary">{addon.price}</span>
                <Link to="/contact">
                  <Button size="sm" variant="outline" className="rounded-full">
                    Inquire
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 section-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Need a Custom Package?
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">Combine any add-ons with our website packages for the ultimate digital solution.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-shadow">
            Get Custom Quote <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Addons;
