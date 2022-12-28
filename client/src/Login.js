import React from 'react'

function Login() {
  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title"> Login</h3>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control mt-1"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
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