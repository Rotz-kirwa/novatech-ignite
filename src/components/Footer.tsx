import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">N</span>
            </div>
            <span className="font-display font-bold text-lg text-white">
              Nova<span className="text-glow-cyan">Tech</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Modern websites, AI automation, and digital solutions that drive real results for businesses across Africa and beyond.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Services", "Packages", "Projects", "About"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-white/60 hover:text-glow-cyan text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {["Web Development", "E-Commerce", "AI Automation", "Digital Marketing", "Branding"].map((s) => (
              <span key={s} className="text-white/60 text-sm">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+254791260817" className="flex items-center gap-2 text-white/60 hover:text-glow-cyan text-sm transition-colors">
              <Phone size={14} /> 0791 260 817
            </a>
            <a href="mailto:hello@novatech.co.ke" className="flex items-center gap-2 text-white/60 hover:text-glow-cyan text-sm transition-colors">
              <Mail size={14} /> hello@novatech.co.ke
            </a>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin size={14} /> Nairobi, Kenya
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} NovaTech Digital Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
