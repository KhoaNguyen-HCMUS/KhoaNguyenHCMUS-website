import { motion } from 'framer-motion';
import { useTheme } from '../../context/themeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center relative overflow-hidden gradient-animate'
    >
      <div className='absolute inset-0 bg-black opacity-10'></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center px-4'
      >
        <img src='/Khoa.jpg' alt='Profile' className='w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500' />
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Khoa Nguyen
        </h1>
        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Frontend Developer</p>
        <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Student at HCMUS | React Developer | UI/UX Enthusiast
        </p>
      </motion.div>
    </section>
  );
};

export default About;
