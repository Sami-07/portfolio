import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = false }: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`mb-12 relative ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <span className="text-primary text-lg font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-primary rounded-full"></span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading; 