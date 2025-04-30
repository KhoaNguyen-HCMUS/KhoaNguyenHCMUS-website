import { experiences, projects, awards, certificates } from '../../data/data.js';
import About from '../../components/sections/about';
import Experience from '../../components/sections/experience';
import Project from '../../components/sections/project.jsx';
import Award from '../../components/sections/award.jsx';

const Home = () => {
  return (
    <>
      <About />
      <Experience experiences={experiences} />
      <Project projects={projects} />
      <Award awards={awards} certificates={certificates} />
    </>
  );
};

export default Home;
