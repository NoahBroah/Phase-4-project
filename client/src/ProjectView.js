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
      console.log(project)
      setProject(project);
    });
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
      <h4>{project.number_of_people}</h4>
      <div>
        <div>
          <Comments project={project}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectView