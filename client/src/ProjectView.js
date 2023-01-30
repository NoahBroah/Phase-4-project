import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';

function ProjectView() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  
  async function fetchProjects() {
    return fetch(`/projects/${id}`)
    .then(r => r.json())
    .then((project) => {
      setProject(project);
    });
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="solo-project">
      <h1>Title: {project.title}</h1>
      <div className="solo-content">
      <h3><span>Description:</span>  {project.description}</h3>
      <h3><span>People Needed:</span>  {project.number_of_people}</h3>
        </div >
      <div>
        <div>
          <Comments project={project}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectView