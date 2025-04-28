import { experiences, projects, awards } from '../../data/data.js'; // Import your data
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <section className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800'>
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

      {/* Experience Section */}
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

      {/* Projects Section */}
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

      {/* Awards Section */}
      <section className='py-20 bg-gray-800' id='awards'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>Awards & Activities</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='bg-gray-900 p-6 rounded-lg'
              >
                <h3 className='text-xl font-bold text-white mb-2'>{award.title}</h3>
                <p className='text-blue-400 mb-2'>{award.date}</p>
                <p className='text-gray-300'>{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
