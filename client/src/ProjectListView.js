import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
      <div>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <h2>Title: {project.title}</h2>
              <h3>Description: {project.description}</h3>
              <h5>Number of people needed: {project.number_of_people}</h5>
              <Link to={`/my_projects/${project.id}`}>View this project</Link>
              {/* <button onClick={() => handleViewProject(project.id)}>View this project</button> */}
              <button onClick={() => handleDeleteClick(project.id)}>
                Delete Project
              </button>
              <Link to={`/my_projects/${project.id}/edit`}>
                Edit Project
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectListView;
