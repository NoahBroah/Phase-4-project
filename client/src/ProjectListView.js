import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Project } from './Project';

// function ProjectListView({ projects, changeProjectView, handleDeleteClick, handleViewProject }) {
function ProjectListView() {

  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    return fetch("/projects").then((resp) => {
      if (resp.ok) {
        resp.json().then((projects) => setProjects(projects));
      }
    });
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  function handleDeleteClick(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    }).then(() => {
      // refetch projects and setProjects
      return fetchProjects()
    });
  }

  return (
    <div>
      <div className="text-center">
        <Link to="/my_projects/new">Create New Project</Link>
        {/* <button onClick={goToCreateProjectView}>
            </button> */}
      </div>
      <Project project={projects?.[0] ?? {}}/>
      <div>
        {projects.map((project) => {
          return (
            // <Project key={project.id} project={project} handleDeleteClick={handleDeleteClick}/>
            <div key={project.id} className="project-card">
              <h2>Title: {project.title}</h2>
              <h3>Description: {project.description}</h3>
              <h5>Number of people needed: {project.number_of_people}</h5>
              <div className="d-flex justify-content-around my-3">
              <Link className="mx-5 btn btn-light" to={`/my_projects/${project.id}`}>View this project</Link>
              {/* <button onClick={() => handleViewProject(project.id)}>View this project</button> */}
              <Link className="mx-5 btn btn-light" to={`/my_projects/${project.id}/edit`}>
                <BsFillPencilFill />
              </Link>
              <button className="mx-5 btn btn-danger" onClick={() => handleDeleteClick(project.id)}>
              <BsFillTrashFill />
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectListView;
