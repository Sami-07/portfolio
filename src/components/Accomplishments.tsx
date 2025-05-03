import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { accomplishmentsData } from '../constants';

const Accomplishments = () => {
  return (
    <section id="accomplishments" className="py-20 px-4 bg-dark-200">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="Accomplishments" subtitle="My achievements" />
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {accomplishmentsData.map((item, index) => (
            <div 
              key={index}
              className="bg-dark-100 p-6 rounded-lg shadow-md hover:shadow-primary/5 transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-light-100 mb-2">{item.title}</h3>
              <p className={`text-${item.color}`}>{item.event}</p>
              <p className="text-light-200 mt-1">{item.date}</p>
              <p className="text-light-300 mt-3">{item.organization}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments; 