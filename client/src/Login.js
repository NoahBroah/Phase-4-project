import React from 'react'
import { useState } from 'react'

function Login({setCurrentUser, setLoggedIn}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [login, setLogin] = useState("")

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch("/login",{
            method: "POST",
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(setCurrentUser)
            } else {
                resp.json().then( e => setErrors(console.error())) // <-- this might not work <--
            }
        }
            )
        .then(user => setLoggedIn(user))
    }
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={onSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title"> Login</h3>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control mt-1"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
)
  
}

export default Login