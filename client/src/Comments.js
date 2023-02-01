import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import IndividualComment from "./IndividualComment";

function Comments({ notes, setNotes, id }) {
  // const { id } = useParams();
  const [comment, setComment] = useState("");
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
      .then((newComment) => {
        if (newComment?.errors) {
          setErrors(newComment.errors);
        } else {
          setNotes([...notes, newComment]);
          setComment("");
        }
      });
  }

  return (
    <div className="comments">
      <div>
        <h5>Comments</h5>
      </div>
      <div>
        {notes?.map((note) => {
          return (
            <div className="comment" key={note.id}>
              <IndividualComment
                // comment={note.comment}
                // user={note.user}
                notes={notes}
                setNotes={setNotes}
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
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
