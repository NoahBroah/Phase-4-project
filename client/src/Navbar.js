import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ setCurrentUser }) {

  function handleLogout() {
    fetch('/logout',{
      method: 'DELETE'
    }).then(resp => {
      if(resp.ok) {
        setCurrentUser(null)
      }
    })

  }
  return (
    <div className='nav'>
        <NavLink to="/" exact>
            Home
        </NavLink>
        <NavLink to="/signup" exact>
            Signup
        </NavLink>
        <NavLink to='/' onClick={handleLogout}>
          Logout
        </NavLink>
    </div>
  )
}

export default Navbar