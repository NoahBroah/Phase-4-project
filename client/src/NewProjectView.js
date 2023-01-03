import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const initialForm = {
  title: "",
  description: "",
  number_of_people: "",
};

function NewProjectView() {
  const history = useHistory();
  const [formData, setFormData] = useState(initialForm);

  function handleNewProjectSubmit(e) {
    e.preventDefault();

    const newProject = { ...formData };
    // handleNewProject(newProject)

    fetch("/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    })
      .then((resp) => resp.json())
      .then((newProject) => {
        console.log(newProject);
        history.push(`/my_projects/${newProject.id}`);
      });
  }

  return (
    <div>
      <div>
        <div>
          <div className="text-center">
            <Link className="link-primary" to={`/my_projects`}>
              View All Projects
            </Link>
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
                  name="title"
                  className="form-control mt-1"
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mt-3">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control mt-1"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group mt-3">
                <label>Number of People Needed</label>
                <input
                  type="text"
                  name="number_of_people"
                  className="form-control mt-1"
                  placeholder="Enter a number"
                  value={formData.number_of_people}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
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
      </div>
    </div>
  );
}

export default NewProjectView;
