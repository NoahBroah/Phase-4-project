import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink to="/" exact>
            Home
        </NavLink>
        <NavLink to="/signup" exact>
            Signup
        </NavLink>
        <NavLink to="/login" exact>
            Login
        </NavLink>
    </div>
  )
}

export default Navbar