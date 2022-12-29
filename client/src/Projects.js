import React, { useState } from 'react'

const initialForm = {
    title:'',
    description:'',
    number_of_people:''
}

function Projects({ projects, setProjects }) {
    const [projectView, setProjectView] = useState("View Projects")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState(initialForm)
    

    function handleNewProjectSubmit(e) {
        e.preventDefault();
        alert('A new user has been created')

        const newProject = { ...formData }
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
                name='title'
                className="form-control mt-1"
                placeholder="Enter title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <input
                type="text"
                name='description'
                className="form-control mt-1"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}            />
            </div>
            <div className="form-group mt-3">
              <label>Number of People Needed</label>
              <input
                type="text"
                name='number_of_people'
                className="form-control mt-1"
                placeholder="Enter a number"
                value={formData.number_of_people}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}             />
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

