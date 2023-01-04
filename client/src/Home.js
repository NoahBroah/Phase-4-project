import React, { useEffect, useState } from 'react'
import ProjectListView from './ProjectListView'
import Projects from './Projects'
import "./home.css"

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
    <div style={{ display: 'flex', justifyContent:'center',alignItems:'center'}}>
      {!user ? "Please login to see your account"
      :
      <div>
<div className="typewriter">
        <span>
          Welcome! You are now logged in as {user.username}
        </span>
      </div>
          <div>
            <ProjectListView/>
          </div>
      </div>
       }
      </div>
  )
}

export default Home