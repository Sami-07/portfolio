import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    degree: 'B.Tech (CSE)',
    institution: 'Sreyas Institute of Engineering and Technology',
    period: '2021 – 2025',
    score: 'CGPA: 7.83/10',
    color: 'primary'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    period: '2019 – 2021',
    score: 'Score: 95/100',
    color: 'secondary'
  },
  {
    degree: 'SSC',
    institution: 'Dilsukhnagar High School',
    period: '2014 – 2019',
    score: 'CGPA: 9.0/10',
    color: 'accent'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="Education" subtitle="Academic background" />
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-dark-100 p-6 rounded-lg shadow-md hover:shadow-primary/5 transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-light-100 mb-2">{item.degree}</h3>
              <p className={`text-${item.color}`}>{item.institution}</p>
              <p className="text-light-200 mt-1">{item.period}</p>
              <p className="text-light-100 mt-3 font-medium">{item.score}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 