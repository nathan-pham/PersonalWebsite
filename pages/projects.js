import Root from "../components/body/root";
// import { Project } from "../components/root/projects";

const Project = (props) => {
  return (
    <div className="project">
      <div className="flex justify-between align-center content">
        <h2 className="white">{props.title}</h2>
        <div className="tag">Hackathon</div>
      </div>
      <p className="default-size white">{props.description}</p>
      <div className="information">
        <a
          href={"https://github.com/nathan-pham/" + (props.github || "")}
          className="flex align-center justify-center white"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="flex align-center justify-center white">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Root title="Projects">
      <div className="section">
        <h1 className="title crayola">Projects</h1>
        <input type="text" />
        <div className="filters">
          <div className="tag default-size">Experiment</div>
          <div className="tag default-size">Hackathon</div>
          <div className="tag default-size">Music</div>
        </div>
        <Project
          title="Eating Cheezits"
          description="adventures of eating cheezits"
        />
        <Project
          title="Eating Cheezits"
          description="adventures of eating cheezits"
        />
        <Project
          title="Eating Cheezits"
          description="adventures of eating cheezits"
        />
      </div>
    </Root>
  );
};

export default Projects;
