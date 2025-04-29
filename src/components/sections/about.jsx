import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800'
      id='about'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center px-4'
      >
        <img
          src='/Khoa.jpg'
          alt='Khoa Nguyen'
          className='w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500'
        />
        <h1 className='text-5xl font-bold mb-4 text-white'>Khoa Nguyen</h1>
        <p className='text-xl text-gray-300 mb-6'>Frontend Developer</p>
        <p className='text-gray-400 max-w-2xl mx-auto'>Student at HCMUS | React Developer | UI/UX Enthusiast</p>
      </motion.div>
    </section>
  );
};

export default About;
