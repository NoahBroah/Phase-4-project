import React from 'react'

function NewProjectView({ changeProjectView, handleNewProjectSubmit, formData, setFormData}) {
  return (
    <div>
        <div>
                <div>
                <div className="text-center">
              <button className="link-primary" onClick={changeProjectView}>
                View All Projects
              </button>
            </div>
                </div>
            <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleNewProjectSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">New Project</h3>
            <div className="form-group mt-3">
              <label>Title</label>
              <input
                type="title"
                name='title'
                className="form-control mt-1"
                placeholder="Enter title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <input
                type="text"
                name='description'
                className="form-control mt-1"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}            />
            </div>
            <div className="form-group mt-3">
              <label>Number of People Needed</label>
              <input
                type="text"
                name='number_of_people'
                className="form-control mt-1"
                placeholder="Enter a number"
                value={formData.number_of_people}
                onChange={(e) => setFormData({...formData, 
                    [e.target.name]:e.target.value})}             />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
            </div>
    </div>
  )
}

export default NewProjectView