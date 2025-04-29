import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';

const Award = ({ awards }) => {
  const { isDark } = useTheme();
  return (
    <section
      className={`py-20 ${
        isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
      id='awards'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>
          Awards & Activities
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${isDark ? 'bg-gray-900' : 'bg-gray-300'} p-6 rounded-lg`}
            >
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{award.title}</h3>
              <p className='text-blue-400 mb-2'>{award.date}</p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Award.propTypes = {
  awards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Award;
