import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

// function ProjectListView({ projects, changeProjectView, handleDeleteClick, handleViewProject }) {
function ProjectListView({ projects }) {
  const [errors, setErrors] = useState([])
 


  return (
    <div>
      <div className="text-center">
        <Link to="/my_projects/new">Create New Project</Link>
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
