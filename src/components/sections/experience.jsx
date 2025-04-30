import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';
import { COLORS } from '../../styles/colors';

const Experience = ({ experiences }) => {
  const { isDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

  return (
    <section className='py-20' style={{ backgroundColor: theme.primary }} id='experience'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-12 text-center' style={{ color: theme.text.primary }}>
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
                <h3 className='text-xl font-bold' style={{ color: theme.text.primary }}>
                  {exp.company}
                </h3>
                <p className='mb-2' style={{ color: theme.text.accent }}>
                  {exp.period}
                </p>
              </div>
              <div className='w-full md:w-2/3'>
                <h4 className='text-lg font-semibold mb-2' style={{ color: theme.text.primary }}>
                  {exp.role}
                </h4>
                <ul className='list-disc list-inside space-y-2' style={{ color: theme.text.secondary }}>
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

export default Experience;
