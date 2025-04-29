import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';

const Experience = ({ experiences }) => {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-20 ${
        isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
      id='experience'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>
          Experience
        </h2>
        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-8 items-start'
            >
              <div className='w-full md:w-1/3'>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.company}</h3>
                <p className='text-blue-400'>{exp.period}</p>
              </div>
              <div className='w-full md:w-2/3'>
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{exp.role}</h4>
                <ul className={`list-disc list-inside ${isDark ? 'text-white' : 'text-gray-700'} space-y-2`}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Experience;
