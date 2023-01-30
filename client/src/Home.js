import React, { useEffect, useState } from "react";
import ProjectListView from "./ProjectListView";
import "./home.css";
import { Link, useHistory } from "react-router-dom";


function Home({ user }) {
 const history = useHistory()
 function redirectToSignup() {
    "Not Authorized"
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!user ? (
        redirectToSignup()
      ) : (

            <div className="home1">
              <div>
                <h1>Welcome to Collabland!</h1>
              </div>
              <div className="type-container">
                <div className="typed-out">You are now logged in as </div>
                <div className="c1">
                  <div className="typed-out2">{user.username}</div>
                </div>
              </div>
              <div className="my-projects-div">
                <h1>My Projects:</h1>
                {user.projects.map(project => {
                  return(
                    <div  key={project.id}>
                      <Link  className='home-project-links' to={`/my_projects/${project.id}`}>{project.title}</Link>
                    </div>
                  )
                })}
              </div>
          </div>

      )}
    </div>
  );
}

export default Home;
