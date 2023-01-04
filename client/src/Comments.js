import React, { useState } from "react";
import { useParams } from "react-router-dom";
import IndividualComment from "./IndividualComment";

function Comments({ project }) {
  const { id } = useParams()
  const [comment, setComment] = useState("");

  console.log(project)

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
      .then(setComment(""));
  }

  return (
    <div>
      <div>
        <h5>Comments</h5>
      </div>
      <div>
        {project?.notes?.map(note => {
          return (
            <IndividualComment 
          key={note.id}
          comment={note.comment}/>
          )
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