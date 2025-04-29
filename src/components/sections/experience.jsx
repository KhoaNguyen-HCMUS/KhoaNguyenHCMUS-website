import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Experience = ({ experiences }) => {
  return (
    <section className='py-20 bg-gray-800' id='experience'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-white mb-12 text-center'>Experience</h2>
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
                <h3 className='text-xl font-bold text-white'>{exp.company}</h3>
                <p className='text-blue-400'>{exp.period}</p>
              </div>
              <div className='w-full md:w-2/3'>
                <h4 className='text-lg font-semibold text-white mb-2'>{exp.role}</h4>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
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
