import React from "react";
import { NavLink } from "react-router-dom";
import ProjectListView from "./ProjectListView";

function Navbar({ setCurrentUser, user}) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setCurrentUser(null);
        alert("You have been logged out");
      }
    });
  }
  return (
    <div className="nav">
      <div className="nav-inner">
        <NavLink to="/" exact className="title">
          Collabland
        </NavLink>
      </div>
      <div className="nav-inner">
        {!user ? null :
        <NavLink to='/my_projects'>
          View Projects
        </NavLink>
}
        <NavLink to="/signup" exact className="hvr-rotate">
          Signup
        </NavLink>
        <NavLink to="/signup" className="hvr-rotate" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
