import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Globe, ShoppingCart, Bot, Palette, TrendingUp, Building2,
  Star, ArrowRight, CheckCircle, Users, Briefcase, Zap,
  Rocket, Shield, Clock
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Globe, title: "Website Development", desc: "Stunning, responsive websites that convert visitors into clients." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Online stores with payments, inventory, and admin dashboards." },
  { icon: Bot, title: "AI & Automation", desc: "Chatbots, workflow automation, and CRM integrations." },
  { icon: Palette, title: "Branding & Design", desc: "Logo design, brand identity, and marketing creatives." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, ads, social media management, and growth strategies." },
  { icon: Building2, title: "Business Solutions", desc: "Consultation, startup guidance, and booking systems." },
];

const packages = [
  {
    name: "Starter",
    price: "KSH 15,000",
    features: ["1–5 pages", "Mobile responsive", "Basic SEO", "Free domain (1 year)", "Contact forms", "1 month maintenance"],
    popular: false,
  },
  {
    name: "Business",
    price: "KSH 30,000",
    features: ["5–10 pages", "Advanced UI/UX", "SEO optimization", "Analytics setup", "Payment integrations", "Blog system", "AI chatbot", "3 months maintenance"],
    popular: true,
  },
  {
    name: "Premium",
    price: "KSH 50,000",
    features: ["Full online store", "Cart & checkout", "M-Pesa + card payments", "Admin dashboard", "Inventory management", "AI automation", "CRM integration", "6 months maintenance"],
    popular: false,
  },
];

const testimonials = [
  { name: "Sarah Kimani", role: "CEO, GreenLeaf Organics", text: "NovaTech transformed our online presence. Our sales increased by 300% within 3 months of launching our e-commerce store.", stars: 5 },
  { name: "James Odhiambo", role: "Founder, Nairobi Realty", text: "The real estate platform they built for us is exceptional. Modern, fast, and our clients love the property search experience.", stars: 5 },
  { name: "Amina Hassan", role: "Director, TravelKe Tours", text: "Their booking system and AI chatbot have automated 70% of our customer inquiries. Game-changing for our business.", stars: 5 },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-glow-cyan/10 rounded-full blur-[80px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 glass-dark text-glow-cyan">
              🚀 Africa's Premier Digital Agency
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Build. Scale. Automate
            <br />
            <span className="gradient-text">Your Business with NovaTech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Modern websites, AI automation, and digital solutions that drive real results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 text-lg glow-shadow hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-white/20 text-white hover:bg-white/10">
                View Packages
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 glass-dark rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <SectionHeading badge="What We Do" title="Our" highlight="Services" description="End-to-end digital solutions to help your business thrive in the modern world." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-6 card-shadow hover-lift border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="rounded-full px-8">
              Explore All Services <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow-purple/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="Pricing" title="Website" highlight="Packages" description="Transparent pricing, premium quality. Choose the plan that fits your business." light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 ${pkg.popular ? "gradient-bg text-white ring-2 ring-glow-cyan/50 scale-105" : "glass-dark text-white"}`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-neon text-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-1">{pkg.name}</h3>
              <div className="text-3xl font-display font-bold mb-4">{pkg.price}</div>
              <ul className="space-y-2.5 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className={`mt-0.5 flex-shrink-0 ${pkg.popular ? "text-neon" : "text-glow-cyan"}`} />
                    <span className={pkg.popular ? "text-white/90" : "text-white/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className={`w-full rounded-full ${pkg.popular ? "bg-white text-foreground hover:bg-white/90" : "gradient-bg text-primary-foreground"}`}>
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Why NovaTech" title="Why Businesses" highlight="Choose Us" description="We deliver results, not just websites." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: "Fast Delivery", desc: "Projects delivered in record time without compromising quality." },
            { icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security and 99.9% uptime guarantee." },
            { icon: Users, title: "Dedicated Support", desc: "Responsive team always ready to help you grow." },
            { icon: Clock, title: "Ongoing Maintenance", desc: "We keep your systems updated and running smoothly." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <item.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Testimonials" title="What Our Clients" highlight="Say" description="Real stories from real businesses we've helped transform." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 card-shadow border border-border/50"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold text-card-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue/15 rounded-full blur-[150px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and discover how NovaTech can accelerate your digital growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 text-lg glow-shadow">
                Book Consultation <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <a href="https://wa.me/254791260817" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-white/20 text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
