import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../constants';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCode, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub, 
  FaAws, 
  FaDocker,
  FaPython,
  FaServer,
  FaGit
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiExpress, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiRedis, 
  SiApachekafka, 
  SiKubernetes, 
  SiNginx, 
  SiPrometheus, 
  SiGrafana, 
  SiPrisma, 
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiFigma,
  SiOpenai,
  SiHuggingface
} from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { TbBrandCpp } from 'react-icons/tb';
import { ImPointRight } from 'react-icons/im';
import { BsDistributeVertical, BsHddNetwork } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdOutlineStorage, MdOutlineEventNote } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

// Icon mapping object
const iconMap = {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAws,
  FaDocker,
  FaPython,
  FaServer,
  FaGit,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiPrisma,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiFigma,
  SiOpenai,
  SiHuggingface,
  BiNetworkChart,
  TbBrandCpp,
  ImPointRight,
  BsDistributeVertical,
  BsHddNetwork,
  GiArtificialIntelligence,
  MdOutlineStorage,
  MdOutlineEventNote,
  TbApi
};

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="My Skills" subtitle="What I can do" center />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div 
                key={category.title}
                className="bg-dark-200 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              >
                {/* Card header with gradient background */}
                <div className={`p-4 bg-gradient-to-r from-dark-100 to-dark-300 flex items-center gap-3`}>
                  <div className={`${category.color} flex items-center justify-center w-8 h-8`}>
                    <CategoryIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-light-100">
                    {category.title}
                  </h3>
                </div>
                
                {/* Card content */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = iconMap[skill.icon as keyof typeof iconMap];
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-3 py-1.5 text-light-200 group"
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          custom={skillIndex}
                        >
                          <div className={`text-xl group-hover:text-primary transition-colors duration-300 ${skill.color}`}>
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 