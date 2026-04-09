import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Home, ShoppingCart, Plane, Truck, Heart, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Real Estate",
    desc: "Property listing platforms, virtual tours, agent portals, and lead generation systems that help real estate businesses close more deals.",
    solutions: ["Property listing websites", "Virtual tour integration", "Lead management CRM", "Mortgage calculators"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Complete online stores with payment integrations, inventory management, and marketing automation to maximize your online sales.",
    solutions: ["Custom online stores", "M-Pesa & card payments", "Inventory management", "Marketing automation"],
  },
  {
    icon: Plane,
    title: "Travel & Tours",
    desc: "Booking platforms, itinerary management, and customer engagement tools that streamline travel business operations.",
    solutions: ["Tour booking systems", "Itinerary management", "Review systems", "Multi-language support"],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Fleet management, delivery tracking, and route optimization tools to help logistics companies operate more efficiently.",
    solutions: ["Fleet management", "Delivery tracking", "Route optimization", "Customer portals"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Patient portals, appointment booking, telemedicine platforms, and health information systems for modern healthcare providers.",
    solutions: ["Patient portals", "Appointment booking", "Telemedicine platforms", "Health information systems"],
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    desc: "MVP development, brand building, and growth strategies tailored for startups and small businesses looking to scale fast.",
    solutions: ["MVP development", "Brand identity", "Growth strategies", "Digital marketing"],
  },
];

const colors = [
  "from-glow-blue to-glow-cyan",
  "from-glow-purple to-glow-blue",
  "from-orange-400 to-rose-500",
  "from-emerald-400 to-glow-cyan",
  "from-rose-400 to-glow-purple",
  "from-glow-cyan to-glow-blue",
];

const Industries = () => (
  <div>
    <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-glow-blue/15 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="Industries" title="Solutions for Every" highlight="Industry" description="We understand the unique challenges of different sectors and build solutions that address them." light />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-card rounded-2xl overflow-hidden card-shadow border border-border/50 hover-lift"
            >
              <div className={`h-2 bg-gradient-to-r ${colors[i]}`} />
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <ind.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-card-foreground mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{ind.desc}</p>
                <ul className="space-y-2">
                  {ind.solutions.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 section-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Don't See Your Industry?
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">We work with businesses across all sectors. Let's discuss how we can help yours.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-shadow">
            Let's Talk <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Industries;
