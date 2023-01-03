import React from 'react'
import { useHistory } from "react-router-dom"

function ProjectView({ projects, changeProjectView, handleDeleteClick, handleViewProject }) {

  // const history = useHistory();

  // function handleClick(id) {
  //   history.push(`/my_projects/${id}/edit`)
  // }

  return (
    <div>
        <div className="text-center">
            <button onClick={changeProjectView}>
              Create New Project
            </button>
            </div>
            <div>
                {projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <h2>Title: {project.title}</h2>
                            <h3>Description: {project.description}</h3>
                            <h5>Number of people needed: {project.number_of_people}</h5>
                            <button onClick={() => handleViewProject(project.id)}>View this project</button>
                            <button onClick={() => handleDeleteClick(project.id)}>Delete Project</button>
                            <button onClick={() => handleClick(project.id)}>Edit Project</button>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default ProjectView