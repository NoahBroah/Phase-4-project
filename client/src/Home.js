import React, { useEffect, useState } from 'react'
import Projects from './Projects'

function Home({ user}) {
  // const [errors, setErrors] = useState([])
  const [projects, setProjects] = useState([])
  useEffect(()=> {
    fetch('/projects')
    .then(resp => {
      if(resp.ok){
        resp.json().then(projects => setProjects(projects))
      }
    })
  },[])

  // function handleNewProject(newProject) {
  //   fetch('/projects',{
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify(newProject),
  // }).then(resp => {
  //     if(resp.ok) {
  //         resp.json().then(console.log(newProject))
  //         .then(setProjects)
  //     } else {
  //         resp.json().then((e) => setErrors(console.error()))
  //     }
  // })
  // }

  return (
    <div>
      {!user ? "Please login to see your account" :
       <div>
        {user.username}
        <Projects projects={projects} setProjects={setProjects}/>
       </div>
       
       }
      </div>
  )
}

export default Home