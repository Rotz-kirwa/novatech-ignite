import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Globe, ShoppingCart, Bot, Palette, TrendingUp, Building2,
  ArrowRight, Monitor, Smartphone, Layout, FileText, CreditCard,
  Package, MessageSquare, Workflow, Users, Paintbrush, Image,
  Megaphone, Search, MapPin, BarChart3, Share2, Lightbulb,
  Briefcase, Rocket, Home, Plane, Truck, Heart
} from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom-built websites that look stunning and perform brilliantly.",
    items: [
      { icon: Monitor, label: "Business Websites" },
      { icon: ShoppingCart, label: "E-Commerce Platforms" },
      { icon: Layout, label: "Portfolio Websites" },
      { icon: FileText, label: "Landing Pages" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Complete online store setups with seamless payment integration.",
    items: [
      { icon: Package, label: "Online Stores" },
      { icon: CreditCard, label: "Payment Integrations (M-Pesa, Stripe, Paystack)" },
      { icon: BarChart3, label: "Inventory Systems" },
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Smart automation tools that save time and boost efficiency.",
    items: [
      { icon: MessageSquare, label: "AI Chatbots (WhatsApp, Website)" },
      { icon: Workflow, label: "Business Automation Workflows" },
      { icon: Users, label: "CRM Integrations" },
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Create a memorable brand identity that sets you apart.",
    items: [
      { icon: Paintbrush, label: "Logo Design" },
      { icon: Image, label: "Brand Identity Kits" },
      { icon: Smartphone, label: "Social Media Graphics" },
      { icon: FileText, label: "Marketing Creatives" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven strategies to grow your audience and revenue.",
    items: [
      { icon: Search, label: "SEO Optimization" },
      { icon: MapPin, label: "Google Business Profile Setup" },
      { icon: Megaphone, label: "Ads (Meta, Google)" },
      { icon: Share2, label: "Social Media Management" },
    ],
  },
  {
    icon: Building2,
    title: "Business Solutions",
    desc: "Strategic consulting and custom tools for any industry.",
    items: [
      { icon: Lightbulb, label: "Business Consultation & Strategy" },
      { icon: Rocket, label: "Startup Setup Guidance" },
      { icon: Home, label: "Real Estate Digital Solutions" },
      { icon: Briefcase, label: "Booking Systems (Travel, Hotels)" },
    ],
  },
];

const Services = () => (
  <div>
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-glow-purple/15 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="Our Services" title="Everything Your Business" highlight="Needs to Grow" description="From web development to AI automation, we provide comprehensive digital solutions." light />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4 space-y-16">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-card rounded-2xl p-8 card-shadow border border-border/50"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <cat.icon size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-card-foreground">{cat.title}</h3>
                <p className="text-muted-foreground mt-1">{cat.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <item.icon size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 section-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-blue/15 rounded-full blur-[150px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">Let's discuss your unique requirements and build something amazing together.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-shadow">
            Get a Free Quote <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
