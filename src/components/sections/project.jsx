import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';

const Project = ({ projects }) => {
  const { isDark } = useTheme();
  return (
    <section
      className={`py-20 ${
        isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${isDark ? 'bg-gray-900' : 'bg-gray-300'} p-6 rounded-lg`}
            >
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{project.description}</p>
                <div className='flex gap-4'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300'
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 hover:text-blue-300'
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      demo: PropTypes.string,
    })
  ).isRequired,
};

export default Project;
