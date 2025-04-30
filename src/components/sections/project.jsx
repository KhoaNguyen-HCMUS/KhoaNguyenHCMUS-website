import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/themeContext';
import { COLORS } from '../../styles/colors';

const Project = ({ projects }) => {
  const { isDark } = useTheme();
  const theme = isDark ? COLORS.dark : COLORS.light;

  return (
    <section className='py-20' style={{ backgroundColor: theme.primary }} id='projects'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-12 text-center' style={{ color: theme.text.primary }}>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='p-6 rounded-lg'
              style={{ backgroundColor: theme.secondary }}
            >
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-lg' />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2' style={{ color: theme.text.primary }}>
                  {project.title}
                </h3>
                <p className='mb-4' style={{ color: theme.text.secondary }}>
                  {project.description}
                </p>
                <div className='flex gap-4'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: theme.text.accent }}
                      className='hover:opacity-80 transition-opacity'
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: theme.text.accent }}
                      className='hover:opacity-80 transition-opacity'
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
