export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

export const siteConfig = {
  name: 'Abdul Sami',
  description: 'Personal Portfolio',
} as const;


export const resumeLink = 'https://yjl98ivw6f.ufs.sh/f/BPueypH3e51CTkYK27VWNpcPRoumzCKrhDXMxgaHek8tJqEI';

export const experiences = [
  {
    title: 'Tech Lead (Internship)',
    company: 'WiseIN',
    date: 'Oct 2024 – Present',
    logo: '/wisein-logo.jpeg',
    description: [
      'Leading a cross-functional team of 3 developers and 2 UX designers to architect and develop a Full-Stack Web App and cross-platform Mobile App with complex business logic.',
      'Conducting regular code reviews, enforcing coding standards, and ensuring high code quality aligned with project requirements.',
      'Managing end-to-end productionization, deployment, scalability, and release processes to successfully launch the application to market.',
      'Developing optimized features for Web and Mobile, prioritizing performance, responsiveness, and user experience (UX).'
    ]
  },
  {
    title: 'Full Stack Developer (Internship)',
    company: 'Metaverse Ventures',
    date: 'Jun 2024 – Oct 2024',
    logo: '/m0-logo.jpeg',
    description: [
      'Developed full stack AI/LLM-based web apps using Next.js, TypeScript and Nest.js.',
      'Enhanced the user experience of key AI voice features on a leading Voice AI platform.',
      'Contributed to the development of an AI-powered collaborative rich-text editor with real-time features.',
      'Built an Asset Management System using AWS S3 and Next.js for handling uploaded and AI-generated assets.'
    ]
  },
  {
    title: 'Full Stack Developer (Internship)',
    company: 'Sanshi Network Technologies',
    date: 'Jan 2024 – Jun 2024',
    logo: '/sanshi-logo.jpeg',
    description: [
      'Implemented end-to-end user authentication and verification using third-party APIs.',
      'Developed a feature-rich dashboard with complex logic for slot booking, service management, and scheduling.',
      'Optimized database operations using Prisma with PostgreSQL, achieving a 50% performance boost.'
    ]
  }
] as const;

export const projects = [
  {
    title: 'HLS Video Processing System',
    description: 'Scalable video processing pipeline using Node.js and AWS for HLS streaming. Features microservices with Docker and FFmpeg for multi-resolution transcoding and AWS services integration.',
    image: '/projects/mytube.png',
    tags: ['Node.js', 'AWS', 'Docker', 'FFmpeg', 'Microservices'],
    github: 'https://github.com/Sami-07/video-processing-services',
    demo: 'https://mytube.abdulsami.dev'
  },
  {
    title: 'AI-Powered Collaborative Code Editor',
    description: 'Real-time collaborative coding platform with WebSockets and YJS. Includes OpenAI code assistant, Redis PubSub for chat, and AWS-hosted Judge0 for secure code execution.',
    image: '/projects/codecollab.png',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'Redis', 'OpenAI', 'AWS'],
    github: 'https://github.com/Sami-07/ai-powered-collaborative-code-editor',
    demo: 'https://codecollab.abdulsami.dev'
  },
  {
    title: 'AI-powered Website Builder',
    description: 'Platform that generates websites from natural language prompts with real-time editing. Features scalable backend, isolated build environments, and automated deployment pipeline.',
    image: '/projects/codestudio-ai.png',
    tags: ['Node.js', 'React', 'AWS S3', 'AWS ECS', 'LLM', 'Claude'],
    github: 'https://github.com/Sami-07/codestudio-ai',
    demo: 'https://codestudioai.abdulsami.dev/'
  }
] as const;

export const skillCategories = [
  {
    title: 'Frontend',
    icon: 'FaReact',
    skills: [
      { name: 'React.js', icon: 'FaReact', color: 'text-blue-400' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: 'text-white' },
      { name: 'JavaScript', icon: 'SiJavascript', color: 'text-yellow-400' },
      { name: 'Redux', icon: 'SiRedux', color: 'text-purple-500' },
      { name: 'TypeScript', icon: 'SiTypescript', color: 'text-blue-500' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: 'text-blue-500' },
      { name: 'HTML5', icon: 'FaHtml5', color: 'text-orange-500' },
      { name: 'TailwindCSS', icon: 'SiTailwindcss', color: 'text-cyan-400' },
    ],
    color: 'text-blue-400',
  },
  {
    title: 'Backend',
    icon: 'FaServer',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs', color: 'text-green-500' },
      { name: 'Express.js', icon: 'SiExpress', color: 'text-gray-300' },
      { name: 'Next.js API', icon: 'SiNextdotjs', color: 'text-white' },
      { name: 'tRPC', icon: 'TbApi', color: 'text-blue-400' },
      { name: 'Nest.js', icon: 'SiNestjs', color: 'text-red-500' },
      { name: 'Python', icon: 'FaPython', color: 'text-blue-500' },
      { name: 'REST API', icon: 'ImPointRight', color: 'text-green-400' },
      { name: 'Django', icon: 'SiPython', color: 'text-green-700' },
      { name: 'FastAPI', icon: 'SiPython', color: 'text-teal-500' },
    ],
    color: 'text-green-500',
  },
  {
    title: 'Databases',
    icon: 'FaDatabase',
    skills: [
      { name: 'MongoDB', icon: 'SiMongodb', color: 'text-green-500' },
      { name: 'Mongoose', icon: 'SiMongodb', color: 'text-green-600' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: 'text-blue-500' },
      { name: 'Prisma', icon: 'SiPrisma', color: 'text-blue-400' },
      { name: 'MySQL', icon: 'SiMysql', color: 'text-blue-600' },
      { name: 'Firebase', icon: 'SiFirebase', color: 'text-yellow-500' },
    ],
    color: 'text-blue-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: 'FaAws',
    skills: [
      { name: 'AWS S3', icon: 'FaAws', color: 'text-orange-400' },
      { name: 'AWS EC2', icon: 'FaAws', color: 'text-orange-400' },
      { name: 'AWS SQS', icon: 'FaAws', color: 'text-orange-400' },
      { name: 'AWS ECS', icon: 'FaAws', color: 'text-orange-400' },
      { name: 'Docker', icon: 'FaDocker', color: 'text-blue-500' },
      { name: 'CI/CD', icon: 'BiNetworkChart', color: 'text-blue-400' },
      { name: 'Nginx', icon: 'SiNginx', color: 'text-green-500' },
      { name: 'Kubernetes', icon: 'SiKubernetes', color: 'text-blue-500' },
    ],
    color: 'text-orange-400',
  },
  {
    title: 'Others',
    icon: 'FaCode',
    skills: [
      { name: 'C++', icon: 'TbBrandCpp', color: 'text-blue-500' },
      { name: 'Kafka', icon: 'SiApachekafka', color: 'text-white' },
      { name: 'Redis', icon: 'SiRedis', color: 'text-red-500' },
      { name: 'Git', icon: 'FaGit', color: 'text-orange-600' },
      { name: 'GitHub', icon: 'FaGithub', color: 'text-gray-200' },
      { name: 'Figma', icon: 'SiFigma', color: 'text-purple-400' },
    ],
    color: 'text-purple-500',
  },
  {
    title: 'AI/LLM',
    icon: 'GiArtificialIntelligence',
    skills: [
      { name: 'Semantic Search', icon: 'GiArtificialIntelligence', color: 'text-blue-400' },
      { name: 'RAG', icon: 'GiArtificialIntelligence', color: 'text-green-400' },
      { name: 'LangChain', icon: 'GiArtificialIntelligence', color: 'text-teal-400' },
      { name: 'Chroma', icon: 'MdOutlineStorage', color: 'text-purple-400' },
      { name: 'OpenAI', icon: 'SiOpenai', color: 'text-gray-200' },
      { name: 'HuggingFace', icon: 'SiHuggingface', color: 'text-yellow-400' },
    ],
    color: 'text-gray-200',
  },
  {
    title: 'Distributed Systems',
    icon: 'BsDistributeVertical',
    skills: [
      { name: 'Microservices', icon: 'FaServer', color: 'text-blue-400' },
      { name: 'Event-Driven', icon: 'MdOutlineEventNote', color: 'text-green-400' },
      { name: 'Message Queues', icon: 'SiApachekafka', color: 'text-pink-400' },
      { name: 'Load Balancing', icon: 'BiNetworkChart', color: 'text-indigo-400' },
      { name: 'Distributed Caching', icon: 'BsHddNetwork', color: 'text-orange-400' },
      { name: 'Prometheus', icon: 'SiPrometheus', color: 'text-orange-600' },
      { name: 'Grafana', icon: 'SiGrafana', color: 'text-orange-500' },
    ],
    color: 'text-indigo-400',
  },
] as const;

export const accomplishmentsData = [
  {
    title: '1st Place',
    event: 'Code Burst Problem Solving Hackathon',
    date: 'Oct 2023',
    organization: 'Sreyas Institute',
    color: 'primary'
  },
  {
    title: 'Elite + Silver',
    event: 'Programming and DSA using Python',
    date: 'Oct 2023',
    organization: 'NPTEL, IIT Madras',
    color: 'secondary'
  },
  {
    title: '3rd Place',
    event: 'Code-a-Thon Contest (Development)',
    date: 'Mar 2023',
    organization: 'FORGE ALUMNUS Pvt Ltd.',
    color: 'accent'
  }
] as const;

export const aboutData = {
  experience: {
    years: '1.5+',
    description: 'I\'ve worked on multiple projects across various companies, gaining hands-on experience with modern web technologies, microservices, cloud infrastructure, and AI integration.'
  },
  focusAreas: [
    {
      icon: 'FaLaptopCode',
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with React, Next.js, Node.js and various backend technologies'
    },
    {
      icon: 'FaServer',
      title: 'Distributed Systems',
      description: 'Designing and implementing scalable microservices with event-driven architecture'
    },
    {
      icon: 'FaCloud',
      title: 'Cloud Infrastructure',
      description: 'Deploying and managing applications on AWS with Docker, Kubernetes and CI/CD pipelines'
    },
    {
      icon: 'FaBrain',
      title: 'AI/LLM Technologies',
      description: 'Integrating AI capabilities into applications using OpenAI, LangChain and other LLM tools'
    }
  ],
  personalTraits: [
    { icon: 'RiTeamFill', label: 'Team Player' },
    { icon: 'GiBrain', label: 'Problem Solver' },
    { icon: 'RiTimeFill', label: 'Detail-Oriented' },
    { icon: 'TbMoodHappy', label: 'Adaptable' }
  ]
} as const; 