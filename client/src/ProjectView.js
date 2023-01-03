import React from 'react'

function ProjectView({ projects, changeProjectView, handleDeleteClick, handleJoinClick }) {
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
                            <button onClick={handleJoinClick}>Join this project</button>
                            <button onClick={() => handleDeleteClick(project.id)}>Delete Project</button>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default ProjectView