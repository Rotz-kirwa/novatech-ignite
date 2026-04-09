import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "KSH 15,000",
    desc: "Perfect for small businesses and personal brands getting online.",
    features: [
      "1–5 pages",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Free domain (1 year)",
      "Contact forms",
      "Social media links",
      "1 month free maintenance",
    ],
    popular: false,
    color: "from-glow-cyan to-glow-blue",
  },
  {
    name: "Business",
    price: "KSH 30,000",
    desc: "Ideal for growing businesses that need advanced features and integrations.",
    features: [
      "5–10 pages",
      "Advanced UI/UX design",
      "SEO optimization",
      "Google Analytics setup",
      "Payment integrations",
      "Blog system",
      "Business email setup",
      "AI chatbot (basic)",
      "3 months maintenance",
    ],
    popular: true,
    color: "from-glow-blue to-glow-purple",
  },
  {
    name: "Premium E-Commerce",
    price: "KSH 50,000",
    desc: "Full-featured online store with everything you need to sell at scale.",
    features: [
      "Full online store",
      "Shopping cart & checkout",
      "M-Pesa + card payments",
      "Admin dashboard",
      "Inventory management",
      "AI automation tools",
      "Advanced SEO",
      "CRM integration",
      "6 months maintenance",
    ],
    popular: false,
    color: "from-glow-purple to-pink-500",
  },
];

const Packages = () => (
  <div>
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-glow-blue/15 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="Pricing" title="Transparent" highlight="Pricing Plans" description="No hidden fees. Choose the package that fits your business needs and budget." light />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${pkg.popular ? "ring-2 ring-primary lg:scale-105 z-10" : ""}`}
            >
              {pkg.popular && (
                <div className="gradient-bg text-center py-2 text-primary-foreground text-sm font-semibold">
                  <Zap className="inline mr-1" size={14} /> Most Popular
                </div>
              )}
              <div className="bg-card p-8 h-full flex flex-col border border-border/50">
                <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${pkg.color} mb-4`}>
                  {pkg.name}
                </div>
                <div className="text-4xl font-display font-bold text-card-foreground mb-2">{pkg.price}</div>
                <p className="text-muted-foreground text-sm mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full rounded-full ${pkg.popular ? "gradient-bg text-primary-foreground glow-shadow" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                    Get Started <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Need a custom solution? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Packages;
