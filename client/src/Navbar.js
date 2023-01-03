import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ setCurrentUser }) {

  function handleLogout() {
    fetch('/logout',{
      method: 'DELETE'
    }).then(resp => {
      if(resp.ok) {
        setCurrentUser(null)
        alert('You have been logged out')
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
        <NavLink to='/signup' onClick={handleLogout}>
          Logout
        </NavLink>
    </div>
  )
}

export default Navbar