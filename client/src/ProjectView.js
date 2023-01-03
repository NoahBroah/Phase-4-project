import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProjectView() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  async function fetchProjects() {
    return fetch(`/projects/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((project) => setProject(project));
      }
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
      {/* <h5>{project.users.username}</h5> */}
    </div>
  )
}

export default ProjectView