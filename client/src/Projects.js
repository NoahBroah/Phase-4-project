import React, { useState } from 'react'

function Projects({ projects, setProjects }) {
    const [projectView, setProjectView] = useState("View Projects")
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState('')
    const [errors, setErrors] = useState([])

    function handleNewProjectSubmit(e) {
        e.preventDefault();
        
        const newProject = {
            title,
            description,
            numberOfPeople
        }
        fetch('/projects',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newProject),
        }).then(resp => {
            if(resp.ok) {
                resp.json().then(setProjects);
            } else {
                resp.json().then((e) => setErrors(console.error()))
            }
        })

    }

    const changeProjectView = () => {
        setProjectView(projectView === "View Projects" ?  "Create New Project" : "View Projects");
      };
    
      if (projectView === "View Projects") {
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
                            <button>Join this project</button>
                        </div>
                    )
                })}
            </div>
          </div>
        );
      }
    
      return (
        <div>
            <div>
                <div>
                <div className="text-center">
              <button className="link-primary" onClick={changeProjectView}>
                View All Projects
              </button>
            </div>
                </div>
            <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleNewProjectSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">New Project</h3>
            <div className="form-group mt-3">
              <label>Title</label>
              <input
                type="title"
                className="form-control mt-1"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter description"
                value={description}
            onChange={(e) => setDescription(e.target.value)}             />
            </div>
            <div className="form-group mt-3">
              <label>Number of People Needed</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter a number"
                value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}             />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
            </div>
        </div>
       
      );
}

export default Projects

