import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const categories = ["All", "E-Commerce", "Real Estate", "Corporate", "Booking", "Landing Pages"];

const projects = [
  { title: "GreenLeaf Organics Store", category: "E-Commerce", desc: "Full e-commerce platform with M-Pesa integration, inventory management, and admin dashboard.", features: ["M-Pesa Payments", "Inventory System", "Admin Panel"], industry: "Agriculture" },
  { title: "Nairobi Realty Platform", category: "Real Estate", desc: "Property listing platform with advanced search, virtual tours, and agent dashboard.", features: ["Property Search", "Virtual Tours", "Agent Portal"], industry: "Real Estate" },
  { title: "TechVentures Corporate", category: "Corporate", desc: "Premium corporate website with modern design, blog system, and investor portal.", features: ["Blog CMS", "Investor Portal", "SEO Optimized"], industry: "Technology" },
  { title: "TravelKe Booking System", category: "Booking", desc: "Tour booking platform with real-time availability, payment processing, and itinerary management.", features: ["Live Booking", "Payment Gateway", "AI Chatbot"], industry: "Travel & Tourism" },
  { title: "FreshMart Online", category: "E-Commerce", desc: "Grocery delivery platform with cart system, location-based delivery, and loyalty program.", features: ["Delivery Tracking", "Loyalty System", "Mobile App"], industry: "Retail" },
  { title: "HealthFirst Campaign", category: "Landing Pages", desc: "High-converting landing page for a healthcare awareness campaign with donation integration.", features: ["Donation System", "Analytics", "A/B Tested"], industry: "Healthcare" },
  { title: "AutoPrime Listings", category: "E-Commerce", desc: "Vehicle marketplace with advanced filters, dealer profiles, and financing calculator.", features: ["Advanced Filters", "Dealer Portal", "Finance Calc"], industry: "Automotive" },
  { title: "SkyView Properties", category: "Real Estate", desc: "Luxury real estate platform with 3D property tours and mortgage calculator.", features: ["3D Tours", "Mortgage Calc", "CRM"], industry: "Real Estate" },
  { title: "SafariConnect Tours", category: "Booking", desc: "Safari booking platform with multi-language support and real-time availability.", features: ["Multi-Language", "Live Availability", "Reviews"], industry: "Tourism" },
];

const colors = [
  "from-glow-blue to-glow-purple",
  "from-glow-cyan to-glow-blue",
  "from-glow-purple to-pink-500",
  "from-emerald-400 to-glow-cyan",
  "from-orange-400 to-rose-500",
  "from-violet-500 to-glow-blue",
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-cyan/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading badge="Portfolio" title="Our" highlight="Projects" description="A showcase of digital solutions we've built for businesses across industries." light />
        </div>
      </section>

      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "gradient-bg text-primary-foreground glow-shadow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card rounded-2xl overflow-hidden card-shadow border border-border/50 hover-lift"
                >
                  <div className={`h-48 bg-gradient-to-br ${colors[i % colors.length]} relative flex items-center justify-center`}>
                    <span className="text-white/90 font-display font-bold text-xl text-center px-4">{project.title}</span>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{project.category}</span>
                      <span className="text-xs text-muted-foreground">{project.industry}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((f) => (
                        <span key={f} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{f}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;
