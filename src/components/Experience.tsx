import SectionHeading from './SectionHeading';
import { experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Experience {
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly description: readonly string[];
  readonly logo: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--color-dark-100)',
        color: '',
        boxShadow: '0 3px 0 var(--color-primary)',
      }}
      contentArrowStyle={{
        borderRight: '7px solid var(--color-dark-100)',
      }}
      date={experience.date}
      dateClassName="text-light-300"
      iconStyle={{
        background: '#fff',
        color: '#fff',
        boxShadow: '0 0 0 2px var(--color-primary), inset 0 1px 0 rgba(0,0,0,.08), 0 2px 0 2px rgba(0,0,0,.05)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.logo}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-sm md:text-xl font-bold text-light-100">{experience.title}</h3>
        <p className="text-primary font-medium mt-1" style={{ margin: 0 }}>{experience.company}</p>
      </div>
      <ul className="mt-4 list-disc list-inside space-y-2 text-light-200">
        {experience.description.map((point: string, index: number) => (
          <li key={`experience-point-${index}`} className="text-xs md:text-base pl-2">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-200">
      <div className="container mx-auto max-w-screen-xl">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />
        
        <div className="mt-16">
          <VerticalTimeline
            lineColor="var(--color-primary)"
            animate={true}
          >
            {experiences.map((experience: Experience, index: number) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience; 