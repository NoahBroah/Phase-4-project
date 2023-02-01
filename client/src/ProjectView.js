import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function ProjectView({ projects, setProjects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id == id) ?? {};

  const setNotes = (notes) => {
    const updatedProject = {
      ...project,
      notes,
    };
    setProjects((projects) => {
      return projects.map((p) => (p.id === project.id ? updatedProject : p));
    });
  };

  return (
    <div className="solo-project">
      <h1>Title: {project.title}</h1>
      <div className="solo-content">
        <h3>
          <span>Description:</span> {project.description}
        </h3>
        <h3>
          <span>People Needed:</span> {project.number_of_people}
        </h3>
      </div>
      <div>
        <div>
          <Comments
            notes={project.notes ?? []}
            setNotes={setNotes}
            id={project.id}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
