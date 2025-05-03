import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 px-4"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-primary font-semibold text-lg md:text-xl tracking-wide mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I&apos;m
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Shaikh Abdul Sami
            </motion.h1>
            
            <motion.div 
              className="flex flex-col gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-medium text-light-100">
                Full Stack Developer
              </h3>
              <p className="text-light-300 text-lg max-w-md mx-auto md:mx-0">
                With <span className="text-primary font-semibold">1.5+ years</span> of experience, I specialize in building modern web applications with expertise in frontend, backend, DevOps, and cloud technologies. Passionate about creating scalable and efficient solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2 group"
              >
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#projects" 
                className="bg-dark-200 hover:bg-dark-300 text-light-100 px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dark-200/20 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="https://yjl98ivw6f.ufs.sh/f/BPueypH3e51CXaweIkTzkM3IVxNcBYlh6dSTbHtwKaELf0rQ" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-200 hover:bg-dark-300 text-light-100 px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dark-200/20 flex items-center gap-2 group"
              >
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 floating">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-md" />
              <div className="absolute inset-2 rounded-full bg-dark-200 overflow-hidden">
                {/* Replace with your profile image */}
                <Image
                  src="/profile-pic.jpeg"
                  alt="Shaikh Abdul Sami"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 