import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';
import { COLORS } from '../../styles/colors';

const Award = ({ awards, certificates }) => {
  const { isDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

  const renderItems = (items, title) => (
    <div className='w-full'>
      <h3 className='text-2xl font-bold mb-6 text-center' style={{ color: theme.text.accent }}>
        {title}
      </h3>
      <div className='grid grid-cols-1 gap-6'>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='p-6 rounded-lg hover:shadow-xl transition-shadow duration-300'
            style={{ backgroundColor: theme.secondary }}
          >
            <h4 className='text-xl font-bold mb-2' style={{ color: theme.text.primary }}>
              {item.title}
            </h4>
            <p className='text-sm mb-2' style={{ color: theme.text.accent }}>
              {item.date}
            </p>
            <p className='text-base' style={{ color: theme.text.secondary }}>
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center mt-3 hover:opacity-80 transition-opacity'
                style={{ color: theme.text.accent }}
              >
                View Certificate
                <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className='py-20' style={{ backgroundColor: theme.primary }} id='awards'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center' style={{ color: theme.text.primary }}>
          Awards & Certificates
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {renderItems(awards, 'Awards')}
          {renderItems(certificates, 'Certificates')}
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
      link: PropTypes.string,
    })
  ).isRequired,
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default Award;
