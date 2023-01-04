import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const { id } = useParams()
  const [comment, setComment] = useState("");


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
