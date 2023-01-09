import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

// function ProjectListView({ projects, changeProjectView, handleDeleteClick, handleViewProject }) {
function ProjectListView() {
  const [errors, setErrors] = useState([])
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
    }).then((resp) => {
      // refetch projects and setProjects
      if (resp?.errors){
        setErrors(resp.errors)
        console.log(errors)
      } else {
        return fetchProjects()
      }
      
    });
  }

  return (
    <div>
      <div className="text-center">
        <Link to="/my_projects/new">Create New Project</Link>
        {/* <button onClick={goToCreateProjectView}>
            </button> */}
      </div>
      <div className="container">
        <div className="row justify-content-center">
        {projects.map((project) => {
          return (
            <div key={project.id}  className="col-8 my-3">
            <div  className="project-card p-3">
              <h1>{project.title}</h1>
              <h4>{project.description}</h4>
              <h5>{project.number_of_people} people needed</h5>
              <div className="d-flex justify-content-around my-3 text-nowrap">
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
        </div>
          );
        })}
          
        </div>
      </div>
    </div>
  );
}

export default ProjectListView;
