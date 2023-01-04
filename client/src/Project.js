import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

export function Project ({ project, handleDeleteClick }) {
    return (
      <div className="card">
      <h2 className="card-header">Title: {project.title}</h2>
      <div className="card-body">
        {/* <h2 className="card-title">Title: {project.title}</h2> */}
        <h3 className="card-title ">Description: {project.description}</h3>
        <h5 className="card-subtitle mb-2 text-muted">Number of people needed: {project.number_of_people}</h5>
        <Link className="card-link" to={`/my_projects/${project.id}`}>View this project</Link>
        <Link className="card-link " to={`/my_projects/${project.id}/edit`}>
          Edit Project
        </Link>
        <button className="ml-3 btn btn-danger" onClick={() => handleDeleteClick(project.id)}>
        <BsFillTrashFill />
        </button>
      </div>
      </div>
    );
}
