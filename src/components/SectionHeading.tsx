import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ badge, title, highlight, description, light }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-3xl mx-auto mb-12"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 gradient-bg text-primary-foreground">
        {badge}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
      {title} {highlight && <span className="gradient-text">{highlight}</span>}
    </h2>
    {description && (
      <p className={`text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
