import React, { useState } from 'react'
import NewProjectView from './NewProjectView'
import ProjectView from './ProjectListView'

const initialForm = {
    title:'',
    description:'',
    number_of_people:''
}

function Projects({ projects, setProjects }) {
    const [projectView, setProjectView] = useState("View Projects")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState(initialForm)
    
    function handleViewProject(id) {
        fetch(`/projects/${id}`,)
        .then(resp => resp.json())
        .then(projects => {
            <ProjectView projects={projects}/> //THIS IS WRONG
        })
        
    }

   

    function handleDeleteClick(id) {
        fetch(`/projects/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            // refetch projects and setProjects
            fetch('/projects')
    .then(resp => {
      if(resp.ok){
        resp.json().then(projects => setProjects(projects))
      }
    })
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
            <ProjectView projects={projects}   changeProjectView={changeProjectView} handleDeleteClick={handleDeleteClick} handleViewProject={handleViewProject}/>
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

