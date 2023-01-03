import React, { useState } from 'react'
import NewProjectView from './NewProjectView'
import ProjectView from './ProjectView'

const initialForm = {
    title:'',
    description:'',
    number_of_people:''
}

function Projects({ projects, setProjects }) {
    const [projectView, setProjectView] = useState("View Projects")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState(initialForm)
    
    function handleJoinClick(e) {
        console.log(e)
    }

    function handleDeleteClick(id) {
        fetch(`/projects/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            // refetch projects and setProjects
            
        })
    }

    function handleNewProjectSubmit(e) {
        e.preventDefault();
        alert('A new project has been created')

        const newProject = { ...formData }
        // handleNewProject(newProject)

        fetch('/projects',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newProject),
        }).then(resp => {
            if(resp.ok) {
                resp.json().then(console.log(newProject))
                .then(setProjects([...projects,newProject]))
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
            <ProjectView projects={projects}   changeProjectView={changeProjectView} handleDeleteClick={handleDeleteClick}/>
          </div>
        );
      }
    
      return (
        <div>
            <NewProjectView changeProjectView={changeProjectView} handleNewProjectSubmit={handleNewProjectSubmit} formData={formData} setFormData={setFormData} />
        </div>
       
      );
}

export default Projects

