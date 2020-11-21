import { Component } from "react";
import Root from "../components/body/root";
import projectList from "../components/root/projects";

const Project = (props) => {
  return (
    <div className="project">
      <div className="flex justify-between align-center content">
        <h2 className="white">{props.title}</h2>
        <div className={`tag ${props.tag}`}>{props.tag}</div>
      </div>
      <p className="default-size white">{props.description}</p>
      <div className="information flex align-center">
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

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
    };

    this.filterProjects = this.filterProjects.bind(this);
    this.setTags = this.setTags.bind(this);
  }
  filterProjects(event) {
    this.setState({
      filter: event.target.value,
    });
  }
  setTags(tag) {
    this.setState((state) => {
      return state.filter.includes(`#${tag}`)
        ? state
        : { filter: (state.filter + ` #${tag}`).trim() };
    });
  }
  render() {
    let renderProjects = projectList
      .filter((project) => {
        let keys = this.state.filter.toLowerCase().split(" ");
        let pass = false;
        for (let key of keys) {
          pass = key.startsWith("#")
            ? project.tag == key.substring(1)
            : project.title.includes(key);
        }
        return pass;
      })
      .map((project) => {
        const { title, description, tag } = project;
        return <Project title={title} description={description} tag={tag} />;
      });

    return (
      <Root title="Projects">
        <div className="section">
          <h2 className="default-size white">Projects</h2>
          <h1 className="title crayola">Creative Works</h1>
          <input
            type="text"
            value={this.state.filter}
            onInput={this.filterProjects}
          />
          <div className="filters">
            <div
              className="tag default-size"
              onClick={() => this.setTags("Hackathons")}
            >
              Hackathons
            </div>
            <div
              className="tag default-size"
              onClick={() => this.setTags("Libraries")}
            >
              Libraries
            </div>
            <div
              className="tag default-size"
              onClick={() => this.setTags("Games")}
            >
              Games
            </div>
          </div>
          {renderProjects}
        </div>
      </Root>
    );
  }
}

export default Projects;
