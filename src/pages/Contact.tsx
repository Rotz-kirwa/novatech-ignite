import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div>
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-glow-cyan/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading badge="Contact" title="Let's Build Something" highlight="Amazing Together" description="Get in touch and let's discuss how we can help your business grow." light />
        </div>
      </section>

      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
                <h3 className="font-display font-bold text-xl text-card-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl" />
                    <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl" />
                    <Input placeholder="Service Interested In" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="rounded-xl" />
                  </div>
                  <Textarea placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="rounded-xl" />
                  <Button type="submit" className="w-full gradient-bg text-primary-foreground rounded-full glow-shadow">
                    Send Message <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">Call Us</h4>
                  <a href="tel:+254791260817" className="text-primary hover:underline">0791 260 817</a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">Email Us</h4>
                  <a href="mailto:hello@novatech.co.ke" className="text-primary hover:underline">hello@novatech.co.ke</a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">WhatsApp</h4>
                  <a href="https://wa.me/254791260817" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us instantly</a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-card-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sat: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80">
        <iframe
          title="NovaTech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219!3d-1.30278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
