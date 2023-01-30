import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import IndividualComment from "./IndividualComment";

function Comments({ project }) {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      comment: comment,
      project_id: id,
    };
    fetch(`/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then(console.log(newComment))
      // Update state of Project
      .then(setComment(""));
    history.push(`/my_projects`);
    
  }

  return (
    <div className="comments">
      <div>
        <h5>Comments</h5>
      </div>
      <div>
        {project?.notes?.map((note) => {
          return (
            <div className="comment" key={note.id}>
              <IndividualComment
                comment={note.comment}
                user={note.user}
                note={note}
              />
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
