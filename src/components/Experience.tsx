import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-200">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />
        
        {/* Experience timeline */}
        <div className="mt-16 relative">
          {/* Timeline line - centered vertically */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/30 z-10" />
              
              {/* Desktop: Content cards alternating sides */}
              <div className={`hidden md:block ${index % 2 === 0 ? 'pr-[53%]' : 'pl-[53%]'}`}>
                <div className="bg-dark-100 p-6 rounded-lg shadow-md hover:shadow-primary/5 transition-shadow duration-300 relative">
                  {/* Arrow pointing to timeline */}
                  <div className={`absolute top-6 ${
                    index % 2 === 0 ? '-right-4' : '-left-4'
                  } h-4 w-4 bg-dark-100 rotate-45`} />
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-light-100">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-light-400 text-sm">•</span>
                      <span className="text-light-300 text-sm">{exp.date}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-light-200">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">
                        <span className="pl-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Mobile: All cards on the right */}
              <div className="md:hidden pl-[60px]">
                <div className="bg-dark-100 p-6 rounded-lg shadow-md hover:shadow-primary/5 transition-shadow duration-300 relative">
                  {/* Arrow pointing to timeline */}
                  <div className="absolute top-6 -left-4 h-4 w-4 bg-dark-100 rotate-45" />
                  
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-light-100">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-light-400 text-sm">•</span>
                      <span className="text-light-300 text-sm">{exp.date}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-light-200">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">
                        <span className="pl-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 