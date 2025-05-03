import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { aboutData } from '../constants';
import { FaBriefcase, FaLaptopCode, FaServer, FaCloud, FaBrain } from 'react-icons/fa';
import { RiTeamFill, RiTimeFill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { TbMoodHappy } from 'react-icons/tb';
import { IconType } from 'react-icons';

const FocusAreaItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="group bg-dark-200/50 hover:bg-dark-200/80 transition-all duration-300 p-4 rounded-lg border border-primary/10 hover:border-primary/30 mb-4">
    <div className="flex items-start gap-4">
      <div className="text-primary text-2xl p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-light-100 font-semibold mb-2 text-lg group-hover:text-primary transition-colors duration-300">{title}</h4>
        <p className="text-light-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const PersonalityItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-2 bg-dark-200 px-3 py-1.5 rounded-full text-light-200 text-sm">
    <span className="text-primary">{icon}</span>
    <span>{label}</span>
  </div>
);

const About = () => {
  const focusAreaIcons: Record<string, IconType> = {
    FaLaptopCode,
    FaServer,
    FaCloud,
    FaBrain
  };

  const personalityIcons: Record<string, IconType> = {
    RiTeamFill,
    GiBrain,
    RiTimeFill,
    TbMoodHappy
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="About Me" subtitle="Get to know me" />
        <div>
          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Professional Experience */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-5 rounded-xl mb-6 border border-primary/30">
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-primary text-xl" />
                <h3 className="text-lg font-bold text-light-100">Professional Experience</h3>
              </div>
              <p className="text-light-200">
                Over the past <span className="text-primary font-semibold">{aboutData.experience.years} years</span>, {aboutData.experience.description}
              </p>
            </div>
            
            {/* Focus Areas */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-6 text-light-100">Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aboutData.focusAreas.map((area) => {
                  const Icon = focusAreaIcons[area.icon];
                  return (
                    <FocusAreaItem 
                      key={area.title}
                      icon={<Icon />}
                      title={area.title}
                      description={area.description}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Personal Traits */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-light-100">Personal Traits</h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.personalTraits.map((trait) => {
                  const Icon = personalityIcons[trait.icon];
                  return (
                    <PersonalityItem 
                      key={trait.label}
                      icon={<Icon className="w-4 h-4" />} 
                      label={trait.label} 
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 