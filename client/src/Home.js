import React, { useEffect, useState } from 'react'
import ProjectListView from './ProjectListView'
import Projects from './Projects'

function Home({ user}) {
  // // const [errors, setErrors] = useState([])
  // const [projects, setProjects] = useState([])
  // useEffect(()=> {
  //   fetch('/projects')
  //   .then(resp => {
  //     if(resp.ok){
  //       resp.json().then(projects => setProjects(projects))
  //     }
  //   })
  // },[])


  return (
    <div>
      {!user ? "Please login to see your account" :
       <div>
        {user.username}
        <ProjectListView></ProjectListView>
        {/* <Projects projects={projects} setProjects={setProjects}/> */}
       </div>
       
       }
      </div>
  )
}

export default Home