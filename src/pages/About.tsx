import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Award, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered", icon: Briefcase },
  { value: "150+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Award },
  { value: "5+", label: "Years Experience", icon: TrendingUp },
];

const reasons = [
  "Custom solutions tailored to your business needs",
  "Transparent pricing with no hidden costs",
  "Dedicated support and ongoing maintenance",
  "Modern tech stack for optimal performance",
  "Fast delivery without compromising quality",
  "Proven track record across multiple industries",
];

const About = () => (
  <div>
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-glow-purple/15 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="About Us" title="The Story Behind" highlight="NovaTech" description="We're a team of passionate technologists building the digital future for African businesses." light />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none mb-16">
            <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow border border-border/50">
              <h3 className="font-display font-bold text-2xl text-card-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NovaTech Digital Solutions was founded with a simple mission: to make premium digital solutions accessible to businesses of all sizes across Africa. We believe every business deserves a powerful online presence, regardless of their budget.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting from a small team in Nairobi, we've grown to serve over 150 clients across multiple industries — from e-commerce startups to established real estate firms. Our approach combines cutting-edge technology with deep understanding of the African market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're at the forefront of AI-powered business automation, helping our clients not just build websites, but transform their entire digital operations.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Eye size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-card-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be Africa's leading digital solutions partner, known for innovation, reliability, and transformative impact on businesses across the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 section-dark relative overflow-hidden">
      <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-blue/10 rounded-full blur-[150px]" /></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mx-auto mb-3">
                <s.icon size={22} className="text-glow-cyan" />
              </div>
              <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Why Us" title="Why Choose" highlight="NovaTech" />
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div key={r} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-3">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="gradient-bg text-primary-foreground rounded-full px-8 glow-shadow">
                Work With Us <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
