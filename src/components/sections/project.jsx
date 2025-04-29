import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Project = ({ projects }) => {
  return (
    <section className='py-20 bg-gray-900' id='projects'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-white mb-12 text-center'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-gray-800 rounded-lg overflow-hidden'
            >
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
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
