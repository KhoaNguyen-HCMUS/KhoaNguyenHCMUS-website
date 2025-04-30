import { motion } from 'framer-motion';
import { useTheme } from '../../context/themeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id='about'
      className={`min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#be185d]'
          : 'bg-gradient-to-br from-[#dbeafe] via-white to-[#fbcfe8]'
      }`}
    >
      {/* Nội dung chính */}
      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10 items-center'>
        {/* Ảnh đại diện */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center'
        >
          <img
            src='/Khoa.jpg'
            alt='Profile'
            className='w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-blue-500'
          />
        </motion.div>

        {/* Thông tin */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center md:text-left'
        >
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Nguyen Le Ho Anh Khoa
          </h1>
          <p className={`text-xl md:text-2xl font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Frontend Developer
          </p>
          <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl`}>
            Student at HCMUS · React Developer · UI/UX Enthusiast
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
